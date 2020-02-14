/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';
angular.module('EdiNationAPILib')
    .factory('ModelFactory', ['UNA',
        'S001',
        'S002',
        'S003',
        'S004',
        'S005',
        'UNB',
        'S006',
        'S007',
        'S008',
        'UNG',
        'UNE',
        'EdifactGroup',
        'UNZ',
        'OperationDetail',
        'OperationResult',
        'EdifactInterchange',
        'Link',
        'EdiModel',
        'ISA',
        'TA1',
        'GS',
        'GE',
        'X12Group',
        'IEA',
        'X12Interchange',
        ModelFactory]);

	/**
	 * Factory service to create instances of models and exception classes
	 */
    function ModelFactory(UNA,
        S001,
        S002,
        S003,
        S004,
        S005,
        UNB,
        S006,
        S007,
        S008,
        UNG,
        UNE,
        EdifactGroup,
        UNZ,
        OperationDetail,
        OperationResult,
        EdifactInterchange,
        Link,
        EdiModel,
        ISA,
        TA1,
        GS,
        GE,
        X12Group,
        IEA,
        X12Interchange) {

		var classMap = {
            UNA: UNA,
            S001: S001,
            S002: S002,
            S003: S003,
            S004: S004,
            S005: S005,
            UNB: UNB,
            S006: S006,
            S007: S007,
            S008: S008,
            UNG: UNG,
            UNE: UNE,
            EdifactGroup: EdifactGroup,
            UNZ: UNZ,
            OperationDetail: OperationDetail,
            OperationResult: OperationResult,
            EdifactInterchange: EdifactInterchange,
            Link: Link,
            EdiModel: EdiModel,
            ISA: ISA,
            TA1: TA1,
            GS: GS,
            GE: GE,
            X12Group: X12Group,
            IEA: IEA,
            X12Interchange: X12Interchange
		};

		return {
		    /**
		     * Creates instance of a model class
		     * @param  modelName  {string}  Name of class to instantiate
		     * @returns  {object} Instance of the model class
		     */
			getInstance: function(modelName) {
        		return new classMap[modelName]();
			}
		};
	}

}(angular));
