/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TA1
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('TA1', ['BaseModel', TA1Model]);

    function TA1Model(BaseModel) {
        var TA1 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.interchangeControlNumber1 = this.getValue(obj.interchangeControlNumber1);
            this.interchangeDate2 = this.getValue(obj.interchangeDate2);
            this.interchangeTime3 = this.getValue(obj.interchangeTime3);
            this.interchangeAcknowledgmentCode4 = this.getValue(obj.interchangeAcknowledgmentCode4);
            this.interchangeNoteCode5 = this.getValue(obj.interchangeNoteCode5);
        };

        TA1.prototype = new BaseModel();
        TA1.prototype.constructor = TA1;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        TA1.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'interchangeControlNumber1', realName: 'InterchangeControlNumber_1' },
                { name: 'interchangeDate2', realName: 'InterchangeDate_2' },
                { name: 'interchangeTime3', realName: 'InterchangeTime_3' },
                { name: 'interchangeAcknowledgmentCode4', realName: 'InterchangeAcknowledgmentCode_4' },
                { name: 'interchangeNoteCode5', realName: 'InterchangeNoteCode_5' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        TA1.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TA1.prototype.getInterchangeControlNumber1 = function () {
            return this.interchangeControlNumber1;
        };
    
        /**
         * Setter for InterchangeControlNumber1
         * 
         * @param {string|null} value 
         */
        TA1.prototype.setInterchangeControlNumber1 = function (value) {
            this.interchangeControlNumber1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TA1.prototype.getInterchangeDate2 = function () {
            return this.interchangeDate2;
        };
    
        /**
         * Setter for InterchangeDate2
         * 
         * @param {string|null} value 
         */
        TA1.prototype.setInterchangeDate2 = function (value) {
            this.interchangeDate2 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TA1.prototype.getInterchangeTime3 = function () {
            return this.interchangeTime3;
        };
    
        /**
         * Setter for InterchangeTime3
         * 
         * @param {string|null} value 
         */
        TA1.prototype.setInterchangeTime3 = function (value) {
            this.interchangeTime3 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TA1.prototype.getInterchangeAcknowledgmentCode4 = function () {
            return this.interchangeAcknowledgmentCode4;
        };
    
        /**
         * Setter for InterchangeAcknowledgmentCode4
         * 
         * @param {string|null} value 
         */
        TA1.prototype.setInterchangeAcknowledgmentCode4 = function (value) {
            this.interchangeAcknowledgmentCode4 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TA1.prototype.getInterchangeNoteCode5 = function () {
            return this.interchangeNoteCode5;
        };
    
        /**
         * Setter for InterchangeNoteCode5
         * 
         * @param {string|null} value 
         */
        TA1.prototype.setInterchangeNoteCode5 = function (value) {
            this.interchangeNoteCode5 = value;
        };
    
        return TA1;
    }

}(angular));
