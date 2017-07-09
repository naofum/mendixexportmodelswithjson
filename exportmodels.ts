/*
    Copyright (C) 2017 naofum@gmail.com

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

import { MendixSdkClient, OnlineWorkingCopy, Project, Revision, Branch, loadAsPromise } from "mendixplatformsdk";
import { ModelSdkClient, IModel, projects, domainmodels, microflows, pages, navigation, texts, security, IStructure, menus, utils } from "mendixmodelsdk";

import when = require('when');

const username = `{YOUR_USERNAME}`;
const apikey = `{YOUR_API_KEY}`;
const projectName = `{YOUR_PROJECT_NAME}`;
const projectId = `{YOUR_PROJECT_ID}`;
const moduleName = "MyFirstModule";
const revNo = -1; // -1 for latest
const branchName = null; // null for mainline
const wc = null;
const client = new MendixSdkClient(username, apikey);
const outFileName = "";
declare function require(x: string): any;
var fs = require('fs');
var stream = "";
const project = new Project(client, projectId, projectName);
const revision = new Revision(revNo, new Branch(project, branchName));

client.platform().createOnlineWorkingCopy(project, revision)
    .then(workingCopy => {
        
        // 1.Constants
        var constants = workingCopy.model().allConstants().filter(co => {
            return co.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        constants.forEach(co => {
            co.load(function (c) {
                console.log("Constant: " + JSON.stringify(co.toJSON(), undefined, 1));
            });
        });
        
        // 2.ConsumedAooServices
        var appservices = workingCopy.model().allConsumedAppServices().filter(aps => {
            return aps.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        appservices.forEach(aps => {
            aps.load(function (a) {
                console.log("ConsumedAppService: " + JSON.stringify(aps.toJSON(), undefined, 1));
            });
        });
        
        // 3.Datasets
        var datasets = workingCopy.model().allDataSets().filter(dataset => {
            return dataset.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        datasets.forEach(dataset => {
            dataset.load(function (ds) {
                console.log("Dataset: " + JSON.stringify(dataset.toJSON(), undefined, 1));
            });
        });
        
        // 4.DocumentTemplates
        var documenttemplates = workingCopy.model().allDocumentTemplates().filter(template => {
            return template.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        documenttemplates.forEach(template => {
            template.load(function (dt) {
                console.log("DocumentTemplate: " + JSON.stringify(template.toJSON(), undefined, 1));
            });
        });
        
        // 5.Documents
        var documents = workingCopy.model().allDocuments().filter(doc => {
            return doc.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        documents.forEach(doc => {
            doc.load(function (dt) {
                console.log("Document: " + JSON.stringify(doc.toJSON(), undefined, 1));
            });
        });
        
        // 6.DomainModels
        var domainmodels = workingCopy.model().allDomainModels().filter(domainmodel => {
            return domainmodel.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        domainmodels.forEach(domainmodel => {
            domainmodel.load(function (dm) {
                console.log("DomainModel: " + JSON.stringify(domainmodel.toJSON(), undefined, 1));
            });
        });
        
        // 7.EntityStructures
//        var entitystructures = workingCopy.model().allEntityStructures().filter(structure => {
//            return structure.qualifiedName.lastIndexOf(moduleName, 0) === 0;
//        });
//        entitystructures.forEach(structure => {
//            structure.load(function (st) {
//                console.log("EntityStructure: " + JSON.stringify(structure.toJSON(), undefined, 1));
//            });
//        });
        
        // 8.Enumerations
        var enumerations = workingCopy.model().allEnumerations().filter(enume => {
            return enume.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        enumerations.forEach(enume => {
            enume.load(function (enu) {
                console.log("Enumeration: " + JSON.stringify(enume.toJSON(), undefined, 1));
            });
        });
        
        // 9.ExportMappings
        var exportmappings = workingCopy.model().allExportMappings().filter(exportmapping => {
            return exportmapping.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        exportmappings.forEach(exportmapping => {
            exportmapping.load(function (ex) {
                console.log("ExportMapping: " + JSON.stringify(exportmapping.toJSON(), undefined, 1));
            });
        });
        
        // 11.Folders
        var folders = workingCopy.model().allFolders().filter(folder => {
//            return folder.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        folders.forEach(folder => {
            console.log("Folder; " + JSON.stringify(folder.toJSON(), undefined, 1));
//            folder.load(function (f) {
//                console.log("Folder: " + JSON.stringify(folder.toJSON(), undefined, 1));
//            });
        });
        
        // 13.ImageCollections
        var imagecollections = workingCopy.model().allImageCollections().filter(imagecollection => {
            return imagecollection.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        imagecollections.forEach(imagecollection => {
            imagecollection.load(function (ex) {
                console.log("ImageCollection: " + JSON.stringify(imagecollection.toJSON(), undefined, 1));
            });
        });
        
        // 14.ImportMappings
        var importmappings = workingCopy.model().allImportMappings().filter(importmapping => {
            return importmapping.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        importmappings.forEach(importmapping => {
            importmapping.load(function (ex) {
                console.log("ImportMapping: " + JSON.stringify(importmapping.toJSON(), undefined, 1));
            });
        });
        
        // 15.ImportedWebServices
        var importedwebservices = workingCopy.model().allImportMappings().filter(importedwebservice => {
            return importedwebservice.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        importedwebservices.forEach(importedwebservice => {
            importedwebservice.load(function (ex) {
                console.log("ImportedWebService: " + JSON.stringify(importedwebservice.toJSON(), undefined, 1));
            });
        });
        
        // 16.JavaActions
        var javasctions = workingCopy.model().allJavaActions().filter(javaaction => {
            return javaaction.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        javasctions.forEach(javaaction => {
            javaaction.load(function (ja) {
                console.log("JavaAction: " + JSON.stringify(javaaction.toJSON(), undefined, 1));
            });
        });
        
        // 17.JsonStructures
        var jsonstructures = workingCopy.model().allJsonStructures().filter(jsonstructure => {
            return jsonstructure.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        jsonstructures.forEach(jsonstructure => {
            jsonstructure.load(function (ja) {
                console.log("JsonStructure: " + JSON.stringify(jsonstructure.toJSON(), undefined, 1));
            });
        });
        
        // 18.Layouts
        var layouts = workingCopy.model().allLayouts().filter(layout => {
            return layout.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        layouts.forEach(layout => {
            layout.load(function (ja) {
                console.log("Layout: " + JSON.stringify(layout.toJSON(), undefined, 1));
            });
        });
        
        // 20.MenuDocuments
        var menudocuments = workingCopy.model().allMenuDocuments().filter(mf => {
            return mf.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        menudocuments.forEach(mf => {
            mf.load(function (m) {
                console.log("MenuDocument: " + JSON.stringify(mf.toJSON(), undefined, 1));
            });
        });
        
        // 22.Microflows
        var microflows = workingCopy.model().allMicroflows().filter(mf => {
            return mf.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        microflows.forEach(mf => {
            mf.load(function (m) {
                console.log("Microflow: " + JSON.stringify(mf.toJSON(), undefined, 1));
            });
        });
        
        // 23.ModuleDocuments
        var moduledocuments = workingCopy.model().allModuleDocuments().filter(mf => {
            return mf.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        moduledocuments.forEach(mf => {
            mf.load(function (m) {
                console.log("ModuleDocument: " + JSON.stringify(mf.toJSON(), undefined, 1));
            });
        });
        
        // 24.ModuleSecurities
        var modulesecurities = workingCopy.model().allModuleSecurities().filter(mf => {
            return mf.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        modulesecurities.forEach(mf => {
            mf.load(function (m) {
                console.log("ModuleSecurity: " + JSON.stringify(mf.toJSON(), undefined, 1));
            });
        });
        
        // 25.Modules
        var modules = workingCopy.model().allModules().filter(mf => {
//            return mf.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        modules.forEach(mf => {
            console.log("Module: " + JSON.stringify(mf.toJSON(), undefined, 1));
//            mf.load(function (m) {
//                console.log("Module: " + JSON.stringify(mf.toJSON(), undefined, 1));
//            });
        });
        
        // 26.MxSchemas
        var mxschemas = workingCopy.model().allMxSchemas().filter(mf => {
            return mf.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        mxschemas.forEach(mf => {
            mf.load(function (m) {
                console.log("MxSchema: " + JSON.stringify(mf.toJSON(), undefined, 1));
            });
        });
        
        // 27.NavigationDocuments
        var navigationdocuments = workingCopy.model().allNavigationDocuments().filter(mf => {
            return mf.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        navigationdocuments.forEach(mf => {
            mf.load(function (m) {
                console.log("NavigationDocument: " + JSON.stringify(mf.toJSON(), undefined, 1));
            });
        });
        
        // 28.Pages
        var totalPages = workingCopy.model().allPages().filter(page => {
            return page.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        totalPages.forEach(page => {
            page.load(function (p) {
                console.log("Page: " + JSON.stringify(page.toJSON(), undefined, 1));
            });
        });
        
        // 29.ProjectConversions
        var projectConversions = workingCopy.model().allProjectConversions().filter(projectConversion => {
            return projectConversion.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        projectConversions.forEach(projectConversion => {
            projectConversion.load(function (p) {
                console.log("ProjectConversion: " + JSON.stringify(projectConversion.toJSON(), undefined, 1));
            });
        });
        
        // 30.ProjectDocuments
        var projectDocuments = workingCopy.model().allProjectDocuments().filter(projectDocument => {
            return projectDocument.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        projectDocuments.forEach(projectDocument => {
            projectDocument.load(function (p) {
                console.log("ProjectDocument: " + JSON.stringify(projectDocument.toJSON(), undefined, 1));
            });
        });
        
        // 31.ProjectSecurities
        var projectSecurities = workingCopy.model().allProjectSecurities().filter(projectSecurity => {
            return projectSecurity.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        projectSecurities.forEach(projectSecurity => {
            projectSecurity.load(function (p) {
                console.log("ProjectSecurity: " + JSON.stringify(projectSecurity.toJSON(), undefined, 1));
            });
        });
        
        // 32.ProjectSettings
        var projectSettings = workingCopy.model().allProjectSettings().filter(projectSetting => {
            return projectSetting.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        projectSettings.forEach(projectSetting => {
            projectSetting.load(function (p) {
                console.log("ProjectSetting: " + JSON.stringify(projectSetting.toJSON(), undefined, 1));
            });
        });
        
        // 33.Projects
        var projects = workingCopy.model().allProjects().filter(project => {
//            return project.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        projects.forEach(project => {
            console.log("Project: " + JSON.stringify(project.toJSON(), undefined, 1));
//            project.load(function (p) {
//                console.log("Project: " + JSON.stringify(project.toJSON(), undefined, 1));
//            });
        });
        
        // 34.PublishedAppServices
        var publishedAppServices = workingCopy.model().allPublishedAppServices().filter(publishedAppService => {
            return publishedAppService.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        publishedAppServices.forEach(publishedAppService => {
            publishedAppService.load(function (p) {
                console.log("PublishedAppService: " + JSON.stringify(publishedAppService.toJSON(), undefined, 1));
            });
        });
        
        // 35.PublishedODataServices
        var publishedODataServices = workingCopy.model().allPublishedODataServices().filter(publishedODataService => {
            return publishedODataService.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        publishedODataServices.forEach(publishedODataService => {
            publishedODataService.load(function (p) {
                console.log("PublishedODataService: " + JSON.stringify(publishedODataService.toJSON(), undefined, 1));
            });
        });
        
        // 37.PublishedRestServices
        var publishedRestServices = workingCopy.model().allPublishedRestServices().filter(publishedRestService => {
            return publishedRestService.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        publishedRestServices.forEach(publishedRestService => {
            publishedRestService.load(function (p) {
                console.log("PublishedRestServices: " + JSON.stringify(publishedRestService.toJSON(), undefined, 1));
            });
        });
        
        // 39.PublishedWebServices
        var publishedWebServices = workingCopy.model().allPublishedWebServices().filter(publishedWebService => {
            return publishedWebService.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        publishedWebServices.forEach(publishedWebService => {
            publishedWebService.load(function (p) {
                console.log("PublishedWebServices: " + JSON.stringify(publishedWebService.toJSON(), undefined, 1));
            });
        });
        
        // 40.RegularExpressions
        var regexs = workingCopy.model().allRegularExpressions().filter(regex => {
            return regex.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        regexs.forEach(regex => {
            regex.load(function (r) {
                console.log("RegularExpression: " + JSON.stringify(regex.toJSON(), undefined, 1));
            });
        });
        
        // 41.Rules
        var rules = workingCopy.model().allRules().filter(rule => {
            return rule.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        rules.forEach(rule => {
            rule.load(function (r) {
                console.log("Rule: " + JSON.stringify(rule.toJSON(), undefined, 1));
            });
        });
        
        // 42.ScheduledEvents
        var scheduledevents = workingCopy.model().allScheduledEvents().filter(scheduledevent => {
            return scheduledevent.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        scheduledevents.forEach(scheduledevent => {
            scheduledevent.load(function (r) {
                console.log("ScheduledEvent: " + JSON.stringify(scheduledevent.toJSON(), undefined, 1));
            });
        });
        
        // 43.Snippets
        var snippets = workingCopy.model().allSnippets().filter(snippet => {
            return snippet.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        snippets.forEach(snippet => {
            snippet.load(function (r) {
                console.log("Snippet: " + JSON.stringify(snippet.toJSON(), undefined, 1));
            });
        });
        
        // 45.Units
        var units = workingCopy.model().allUnits().filter(unit => {
//            return unit.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        units.forEach(unit => {
            console.log("Unit: " + JSON.stringify(unit.toJSON(), undefined, 1));
//            unit.load(function (r) {
//                console.log("Unit: " + JSON.stringify(unit.toJSON(), undefined, 1));
//            });
        });
        
        // 46.XmlSchemas
        var xmlschemas = workingCopy.model().allXmlSchemas().filter(mf => {
            return mf.qualifiedName.lastIndexOf(moduleName, 0) === 0;
        });
        xmlschemas.forEach(mf => {
            mf.load(function (m) {
                console.log("XmlSchema: " + JSON.stringify(mf.toJSON(), undefined, 1));
            });
        });
        
    })
    .done(
    () => {
        // fs.writeFileSync(outFileName, stream);
    },
    error => {
        console.log("Something went wrong:");
        console.dir(error);
    }
);
