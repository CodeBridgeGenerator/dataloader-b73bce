import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import initilization from "../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const OilchangerecordsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            vehicleid: _entity?.vehicleid,servicerecordid: _entity?.servicerecordid,oiltype: _entity?.oiltype,mileage: _entity?.mileage,technicianid: _entity?.technicianid,dateofchange: _entity?.dateofchange,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("oilchangerecords").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Oilchangerecords created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Oilchangerecords" });
        }
        setLoading(false);
    };

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create Oilchangerecords" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="oilchangerecords-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="vehicleid">Vehicleid:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["vehicleid"]) ? (
              <p className="m-0" key="error-vehicleid">
                {error["vehicleid"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="servicerecordid">Servicerecordid:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["servicerecordid"]) ? (
              <p className="m-0" key="error-servicerecordid">
                {error["servicerecordid"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="oiltype">Oiltype:</label>
                <InputText id="oiltype" className="w-full mb-3 p-inputtext-sm" value={_entity?.oiltype} onChange={(e) => setValByKey("oiltype", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["oiltype"]) ? (
              <p className="m-0" key="error-oiltype">
                {error["oiltype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="mileage">Mileage:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["mileage"]) ? (
              <p className="m-0" key="error-mileage">
                {error["mileage"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="technicianid">Technicianid:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["technicianid"]) ? (
              <p className="m-0" key="error-technicianid">
                {error["technicianid"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="dateofchange">Dateofchange:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["dateofchange"]) ? (
              <p className="m-0" key="error-dateofchange">
                {error["dateofchange"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(OilchangerecordsCreateDialogComponent);
