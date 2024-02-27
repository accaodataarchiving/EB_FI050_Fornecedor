sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        var that;

        return Controller.extend("br.com.eldoradobrasil.fi050.fi050fornecedor.controller.DadosFornecedor", {
            onInit: function () {
                sap.ui.core.BusyIndicator.show()

                that = this;
                var oModel = this.getOwnerComponent().getModel("DadosFornecedorModel");             
                this.getView().setModel(oModel, "oModel");
                var email = sap.ushell.Container.getService("UserInfo").getEmail();             

                oModel.read("/DadosFornecedorSet('" + email + "')", {
	    			success: function(oData, response) {
                        //Info Fornecedor
                        that.getView().byId("inputID").setValue(oData.Lifnr);
                        that.getView().byId("inputName").setValue(oData.Name1 + oData.Name2 +oData.Name3 + oData.Name4);
                        that.getView().byId("inputCNPJ").setValue(oData.Stcd1);
                        that.getView().byId("inputIE").setValue(oData.Stcd3);

                        //Endereço
                        that.getView().byId("inputEndereco").setValue(oData.Stras);
                        that.getView().byId("inputBairro").setValue(oData.Ort02);
                        that.getView().byId("inputEstado").setValue(oData.Regio);
                        that.getView().byId("inputCidade").setValue(oData.Mcod3);
                        that.getView().byId("inputPais").setValue(oData.Land1);
                        that.getView().byId("inputCEP").setValue(oData.Pstlz);
                        
                        //Contato
                        that.getView().byId("inputEmail").setValue(sap.ushell.Container.getService("UserInfo").getEmail());
                        that.getView().byId("inputTelefone1").setValue(oData.Telf1);
                        that.getView().byId("inputTelefone2").setValue(oData.Telf2);
                        that.getView().byId("inputTelefone3").setValue(oData.Telfx);
                        sap.ui.core.BusyIndicator.hide()                    
	    			 },

                     error: function(error){ 
                        sap.ui.core.BusyIndicator.hide()
                     } 
                });


                //Tabela Dados Bancários
                oModel.read("/DadosBancariosFornecedorSet/?$filter=PortalUser eq'" + email + "'", {
	    			success: function(oData, response) {
                        var table = that.getView().byId("tableDadosBancarios");      
                        var oODataJSONModel = new sap.ui.model.json.JSONModel();
                        oODataJSONModel.setData(oData);
                        sap.ui.getCore().setModel(oODataJSONModel, "DadosBancModel");
                        table.setModel(oODataJSONModel, "DadosBancModel");
                        sap.ui.core.BusyIndicator.hide()                    
	    			 },

                     error: function(error){ 
                        sap.ui.core.BusyIndicator.hide()
                     } 
                });
            }
        });
    });
