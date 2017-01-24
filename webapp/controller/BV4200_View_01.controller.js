sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcampWebApp_BV4200_01.controller.BV4200_View_01", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcampWebApp_BV4200_01.view.BV4200_View_01
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcampWebApp_BV4200_01.view.BV4200_View_01
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcampWebApp_BV4200_01.view.BV4200_View_01
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcampWebApp_BV4200_01.view.BV4200_View_01
		 */
		//	onExit: function() {
		//
		//	}
		
		onLoginPress: function() {
			
			var oTextField = this.getView().byId("username").getValue().length;
			var pTextField = this.getView().byId("password").getValue().length;
			
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			sap.m.MessageToast.show(sMsg);
			
			
			// if ( oTextField >= 6 && oTextField <= 8 ) {
				
			// 	if (this.getView().byId("username").getValue().toLowerCase() === "joseph")
				
			// 		sap.m.MessageToast.show("Hello Joseph Controller");
				
			// 	else
				
			// 		sap.m.MessageToast.show("And you are?");
				
			
			// }
			
			// else if (oTextField === 0) {
				
			// 	alert("Empty username");
			
			// }
			
			// else {
				
			// 	alert("Invalid username length");
				
			// }
			
			
			// if ( pTextField >= 7 && pTextField <= 10 ) {
				
			// 	if (this.getView().byId("password").getValue() === "Ramen01")
				
			// 		sap.m.MessageToast.show("Hello Ramen01 Controller");
				
			// 	else
				
			// 		sap.m.MessageToast.show("Wrong password");				
				
				
			// }
			
			// else if (pTextField === 0) {
			
			// 	alert("Empty password");

			// }
			
			// else {
				
			// 	alert("Invalid password length");
			// }			
			
				
			// 	alert(oTextField.getValue().length + "length not valid");
			
			// alert("Hello World: " + oTextField.getValue().length);
			
			// sap.m.MessageToast.show("Hello World: Controller");
		},
		
		//lagi dumadaan dito kapag na-create si controller
		onInit : function () {
			// set data model on view
			var oData = {
				field : {
					username : "Username"
				}
			};
			
			var oModel = new JSONModel(oData);
			
			this.getView().setModel(oModel);
			
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.bootcampWebApp_BV4200_01.i18n.i18n"
				
			});
			
			this.getView().setModel(i18nModel, "i18n");
			
		}

	});

});