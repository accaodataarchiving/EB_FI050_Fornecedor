/*global QUnit*/

sap.ui.define([
	"brcomeldoradobrasilfi050/fi050_fornecedor/controller/DadosFornecedor.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DadosFornecedor Controller");

	QUnit.test("I should test the DadosFornecedor controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
