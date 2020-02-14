/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of UNB
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('UNB', ['BaseModel', UNBModel]);

    function UNBModel(BaseModel) {
        var UNB = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.sYNTAXIDENTIFIER1 = this.getValue(obj.sYNTAXIDENTIFIER1);
            this.iNTERCHANGESENDER2 = this.getValue(obj.iNTERCHANGESENDER2);
            this.iNTERCHANGERECIPIENT3 = this.getValue(obj.iNTERCHANGERECIPIENT3);
            this.dATEANDTIMEOFPREPARATION4 = this.getValue(obj.dATEANDTIMEOFPREPARATION4);
            this.interchangeControlReference5 = this.getValue(obj.interchangeControlReference5);
            this.rECIPIENTSREFERENCEPASSWORDDETAILS6 = this.getValue(obj.rECIPIENTSREFERENCEPASSWORDDETAILS6);
            this.applicationReference7 = this.getValue(obj.applicationReference7);
            this.processingPriorityCode8 = this.getValue(obj.processingPriorityCode8);
            this.acknowledgementRequest9 = this.getValue(obj.acknowledgementRequest9);
            this.interchangeAgreementIdentifier10 = this.getValue(obj.interchangeAgreementIdentifier10);
            this.testIndicator11 = this.getValue(obj.testIndicator11);
        };

        UNB.prototype = new BaseModel();
        UNB.prototype.constructor = UNB;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        UNB.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'sYNTAXIDENTIFIER1', realName: 'SYNTAXIDENTIFIER_1', type: 'S001' },
                { name: 'iNTERCHANGESENDER2', realName: 'INTERCHANGESENDER_2', type: 'S002' },
                { name: 'iNTERCHANGERECIPIENT3', realName: 'INTERCHANGERECIPIENT_3', type: 'S003' },
                { name: 'dATEANDTIMEOFPREPARATION4', realName: 'DATEANDTIMEOFPREPARATION_4', type: 'S004' },
                { name: 'interchangeControlReference5', realName: 'InterchangeControlReference_5' },
                {
                    name: 'rECIPIENTSREFERENCEPASSWORDDETAILS6',
                    realName: 'RECIPIENTSREFERENCEPASSWORDDETAILS_6',
                    type: 'S005',
                },
                { name: 'applicationReference7', realName: 'ApplicationReference_7' },
                { name: 'processingPriorityCode8', realName: 'ProcessingPriorityCode_8' },
                { name: 'acknowledgementRequest9', realName: 'AcknowledgementRequest_9' },
                { name: 'interchangeAgreementIdentifier10', realName: 'InterchangeAgreementIdentifier_10' },
                { name: 'testIndicator11', realName: 'TestIndicator_11' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        UNB.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {S001|null}
         */
        UNB.prototype.getSYNTAXIDENTIFIER1 = function () {
            return this.sYNTAXIDENTIFIER1;
        };
    
        /**
         * Setter for SYNTAXIDENTIFIER1
         * 
         * @param {S001|null} value 
         */
        UNB.prototype.setSYNTAXIDENTIFIER1 = function (value) {
            this.sYNTAXIDENTIFIER1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {S002|null}
         */
        UNB.prototype.getINTERCHANGESENDER2 = function () {
            return this.iNTERCHANGESENDER2;
        };
    
        /**
         * Setter for INTERCHANGESENDER2
         * 
         * @param {S002|null} value 
         */
        UNB.prototype.setINTERCHANGESENDER2 = function (value) {
            this.iNTERCHANGESENDER2 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {S003|null}
         */
        UNB.prototype.getINTERCHANGERECIPIENT3 = function () {
            return this.iNTERCHANGERECIPIENT3;
        };
    
        /**
         * Setter for INTERCHANGERECIPIENT3
         * 
         * @param {S003|null} value 
         */
        UNB.prototype.setINTERCHANGERECIPIENT3 = function (value) {
            this.iNTERCHANGERECIPIENT3 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {S004|null}
         */
        UNB.prototype.getDATEANDTIMEOFPREPARATION4 = function () {
            return this.dATEANDTIMEOFPREPARATION4;
        };
    
        /**
         * Setter for DATEANDTIMEOFPREPARATION4
         * 
         * @param {S004|null} value 
         */
        UNB.prototype.setDATEANDTIMEOFPREPARATION4 = function (value) {
            this.dATEANDTIMEOFPREPARATION4 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNB.prototype.getInterchangeControlReference5 = function () {
            return this.interchangeControlReference5;
        };
    
        /**
         * Setter for InterchangeControlReference5
         * 
         * @param {string|null} value 
         */
        UNB.prototype.setInterchangeControlReference5 = function (value) {
            this.interchangeControlReference5 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {S005|null}
         */
        UNB.prototype.getRECIPIENTSREFERENCEPASSWORDDETAILS6 = function () {
            return this.rECIPIENTSREFERENCEPASSWORDDETAILS6;
        };
    
        /**
         * Setter for RECIPIENTSREFERENCEPASSWORDDETAILS6
         * 
         * @param {S005|null} value 
         */
        UNB.prototype.setRECIPIENTSREFERENCEPASSWORDDETAILS6 = function (value) {
            this.rECIPIENTSREFERENCEPASSWORDDETAILS6 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNB.prototype.getApplicationReference7 = function () {
            return this.applicationReference7;
        };
    
        /**
         * Setter for ApplicationReference7
         * 
         * @param {string|null} value 
         */
        UNB.prototype.setApplicationReference7 = function (value) {
            this.applicationReference7 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNB.prototype.getProcessingPriorityCode8 = function () {
            return this.processingPriorityCode8;
        };
    
        /**
         * Setter for ProcessingPriorityCode8
         * 
         * @param {string|null} value 
         */
        UNB.prototype.setProcessingPriorityCode8 = function (value) {
            this.processingPriorityCode8 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNB.prototype.getAcknowledgementRequest9 = function () {
            return this.acknowledgementRequest9;
        };
    
        /**
         * Setter for AcknowledgementRequest9
         * 
         * @param {string|null} value 
         */
        UNB.prototype.setAcknowledgementRequest9 = function (value) {
            this.acknowledgementRequest9 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNB.prototype.getInterchangeAgreementIdentifier10 = function () {
            return this.interchangeAgreementIdentifier10;
        };
    
        /**
         * Setter for InterchangeAgreementIdentifier10
         * 
         * @param {string|null} value 
         */
        UNB.prototype.setInterchangeAgreementIdentifier10 = function (value) {
            this.interchangeAgreementIdentifier10 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNB.prototype.getTestIndicator11 = function () {
            return this.testIndicator11;
        };
    
        /**
         * Setter for TestIndicator11
         * 
         * @param {string|null} value 
         */
        UNB.prototype.setTestIndicator11 = function (value) {
            this.testIndicator11 = value;
        };
    
        return UNB;
    }

}(angular));
