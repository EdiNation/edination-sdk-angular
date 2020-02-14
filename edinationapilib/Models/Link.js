/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Link
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('Link', ['BaseModel', LinkModel]);

    function LinkModel(BaseModel) {
        var Link = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.rel = this.getValue(obj.rel);
            this.href = this.getValue(obj.href);
            this.action = this.getValue(obj.action);
        };

        Link.prototype = new BaseModel();
        Link.prototype.constructor = Link;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Link.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'rel', realName: 'Rel' },
                { name: 'href', realName: 'Href' },
                { name: 'action', realName: 'Action' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Link.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Link.prototype.getRel = function () {
            return this.rel;
        };
    
        /**
         * Setter for Rel
         * 
         * @param {string|null} value 
         */
        Link.prototype.setRel = function (value) {
            this.rel = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Link.prototype.getHref = function () {
            return this.href;
        };
    
        /**
         * Setter for Href
         * 
         * @param {string|null} value 
         */
        Link.prototype.setHref = function (value) {
            this.href = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Link.prototype.getAction = function () {
            return this.action;
        };
    
        /**
         * Setter for Action
         * 
         * @param {string|null} value 
         */
        Link.prototype.setAction = function (value) {
            this.action = value;
        };
    
        return Link;
    }

}(angular));
