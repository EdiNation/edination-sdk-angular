/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of UNG
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('UNG', ['BaseModel', UNGModel]);

    function UNGModel(BaseModel) {
        var UNG = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.messageGroupIdentification1 = this.getValue(obj.messageGroupIdentification1);
            this.aPPLICATIONSENDERIDENTIFICATION2 = this.getValue(obj.aPPLICATIONSENDERIDENTIFICATION2);
            this.aPPLICATIONRECIPIENTIDENTIFICATION3 = this.getValue(obj.aPPLICATIONRECIPIENTIDENTIFICATION3);
            this.dATEANDTIMEOFPREPARATION4 = this.getValue(obj.dATEANDTIMEOFPREPARATION4);
            this.groupReferenceNumber5 = this.getValue(obj.groupReferenceNumber5);
            this.controllingAgency6 = this.getValue(obj.controllingAgency6);
            this.mESSAGEVERSION7 = this.getValue(obj.mESSAGEVERSION7);
            this.applicationPassword8 = this.getValue(obj.applicationPassword8);
        };

        UNG.prototype = new BaseModel();
        UNG.prototype.constructor = UNG;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        UNG.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'messageGroupIdentification1', realName: 'MessageGroupIdentification_1' },
                {
                    name: 'aPPLICATIONSENDERIDENTIFICATION2',
                    realName: 'APPLICATIONSENDERIDENTIFICATION_2',
                    type: 'S006',
                },
                {
                    name: 'aPPLICATIONRECIPIENTIDENTIFICATION3',
                    realName: 'APPLICATIONRECIPIENTIDENTIFICATION_3',
                    type: 'S007',
                },
                { name: 'dATEANDTIMEOFPREPARATION4', realName: 'DATEANDTIMEOFPREPARATION_4', type: 'S004' },
                { name: 'groupReferenceNumber5', realName: 'GroupReferenceNumber_5' },
                { name: 'controllingAgency6', realName: 'ControllingAgency_6' },
                { name: 'mESSAGEVERSION7', realName: 'MESSAGEVERSION_7', type: 'S008' },
                { name: 'applicationPassword8', realName: 'ApplicationPassword_8' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        UNG.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNG.prototype.getMessageGroupIdentification1 = function () {
            return this.messageGroupIdentification1;
        };
    
        /**
         * Setter for MessageGroupIdentification1
         * 
         * @param {string|null} value 
         */
        UNG.prototype.setMessageGroupIdentification1 = function (value) {
            this.messageGroupIdentification1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {S006|null}
         */
        UNG.prototype.getAPPLICATIONSENDERIDENTIFICATION2 = function () {
            return this.aPPLICATIONSENDERIDENTIFICATION2;
        };
    
        /**
         * Setter for APPLICATIONSENDERIDENTIFICATION2
         * 
         * @param {S006|null} value 
         */
        UNG.prototype.setAPPLICATIONSENDERIDENTIFICATION2 = function (value) {
            this.aPPLICATIONSENDERIDENTIFICATION2 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {S007|null}
         */
        UNG.prototype.getAPPLICATIONRECIPIENTIDENTIFICATION3 = function () {
            return this.aPPLICATIONRECIPIENTIDENTIFICATION3;
        };
    
        /**
         * Setter for APPLICATIONRECIPIENTIDENTIFICATION3
         * 
         * @param {S007|null} value 
         */
        UNG.prototype.setAPPLICATIONRECIPIENTIDENTIFICATION3 = function (value) {
            this.aPPLICATIONRECIPIENTIDENTIFICATION3 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {S004|null}
         */
        UNG.prototype.getDATEANDTIMEOFPREPARATION4 = function () {
            return this.dATEANDTIMEOFPREPARATION4;
        };
    
        /**
         * Setter for DATEANDTIMEOFPREPARATION4
         * 
         * @param {S004|null} value 
         */
        UNG.prototype.setDATEANDTIMEOFPREPARATION4 = function (value) {
            this.dATEANDTIMEOFPREPARATION4 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNG.prototype.getGroupReferenceNumber5 = function () {
            return this.groupReferenceNumber5;
        };
    
        /**
         * Setter for GroupReferenceNumber5
         * 
         * @param {string|null} value 
         */
        UNG.prototype.setGroupReferenceNumber5 = function (value) {
            this.groupReferenceNumber5 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNG.prototype.getControllingAgency6 = function () {
            return this.controllingAgency6;
        };
    
        /**
         * Setter for ControllingAgency6
         * 
         * @param {string|null} value 
         */
        UNG.prototype.setControllingAgency6 = function (value) {
            this.controllingAgency6 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {S008|null}
         */
        UNG.prototype.getMESSAGEVERSION7 = function () {
            return this.mESSAGEVERSION7;
        };
    
        /**
         * Setter for MESSAGEVERSION7
         * 
         * @param {S008|null} value 
         */
        UNG.prototype.setMESSAGEVERSION7 = function (value) {
            this.mESSAGEVERSION7 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNG.prototype.getApplicationPassword8 = function () {
            return this.applicationPassword8;
        };
    
        /**
         * Setter for ApplicationPassword8
         * 
         * @param {string|null} value 
         */
        UNG.prototype.setApplicationPassword8 = function (value) {
            this.applicationPassword8 = value;
        };
    
        return UNG;
    }

}(angular));
