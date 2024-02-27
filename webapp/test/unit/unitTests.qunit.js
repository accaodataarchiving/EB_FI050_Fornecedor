/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"brcomeldoradobrasilfi050/fi050_fornecedor/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
