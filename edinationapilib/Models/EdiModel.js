/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of EdiModel
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('EdiModel', ['BaseModel', EdiModelModel]);

    function EdiModelModel(BaseModel) {
        var EdiModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.name = this.getValue(obj.name);
            this.dateCreated = this.getValue(obj.dateCreated);
            this.links = this.getValue(obj.links);
        };

        EdiModel.prototype = new BaseModel();
        EdiModel.prototype.constructor = EdiModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        EdiModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'name', realName: 'Name' },
                { name: 'dateCreated', realName: 'DateCreated' },
                { name: 'links', realName: 'Links', array: true, type: 'Link' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        EdiModel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        EdiModel.prototype.getName = function () {
            return this.name;
        };
    
        /**
         * Setter for Name
         * 
         * @param {string|null} value 
         */
        EdiModel.prototype.setName = function (value) {
            this.name = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        EdiModel.prototype.getDateCreated = function () {
            return this.dateCreated;
        };
    
        /**
         * Setter for DateCreated
         * 
         * @param {string|null} value 
         */
        EdiModel.prototype.setDateCreated = function (value) {
            this.dateCreated = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        EdiModel.prototype.getLinks = function () {
            return this.links;
        };
    
        /**
         * Setter for Links
         * 
         * @param {array|null} value 
         */
        EdiModel.prototype.setLinks = function (value) {
            this.links = value;
        };
    
        return EdiModel;
    }

}(angular));
