// (C) 2022 GoodData Corporation

/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from "./configuration";
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
// Some imports not used depending on template conditions, we also need prettier-ignore so that the import does not get split and ts-ignore still works
// prettier-ignore
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// Some imports not used depending on template conditions, we also need prettier-ignore so that the import does not get split and ts-ignore still works
// prettier-ignore
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Warning related to single column.
 * @export
 * @interface ColumnWarning
 */
export interface ColumnWarning {
    /**
     * Column name.
     * @type {Array<string>}
     * @memberof ColumnWarning
     */
    name: Array<string>;
    /**
     * Warning message related to the column.
     * @type {Array<string>}
     * @memberof ColumnWarning
     */
    message: Array<string>;
}
/**
 * A parameter for testing data source connection
 * @export
 * @interface DataSourceParameter
 */
export interface DataSourceParameter {
    /**
     * Parameter name.
     * @type {string}
     * @memberof DataSourceParameter
     */
    name: string;
    /**
     * Parameter value.
     * @type {string}
     * @memberof DataSourceParameter
     */
    value: string;
}
/**
 * Result of getSchemata. Contains list of available DB schema names.
 * @export
 * @interface DataSourceSchemata
 */
export interface DataSourceSchemata {
    /**
     *
     * @type {Array<string>}
     * @memberof DataSourceSchemata
     */
    schemaNames: Array<string>;
}
/**
 * A table column.
 * @export
 * @interface DeclarativeColumn
 */
export interface DeclarativeColumn {
    /**
     * Column name
     * @type {string}
     * @memberof DeclarativeColumn
     */
    name: string;
    /**
     * Column type
     * @type {string}
     * @memberof DeclarativeColumn
     */
    dataType: DeclarativeColumnDataTypeEnum;
    /**
     * Is column part of primary key?
     * @type {boolean}
     * @memberof DeclarativeColumn
     */
    isPrimaryKey?: boolean;
    /**
     * Referenced table (Foreign key)
     * @type {string}
     * @memberof DeclarativeColumn
     */
    referencedTableId?: string;
    /**
     * Referenced table (Foreign key)
     * @type {string}
     * @memberof DeclarativeColumn
     */
    referencedTableColumn?: string;
}

export const DeclarativeColumnDataTypeEnum = {
    INT: "INT",
    STRING: "STRING",
    DATE: "DATE",
    NUMERIC: "NUMERIC",
    TIMESTAMP: "TIMESTAMP",
    TIMESTAMP_TZ: "TIMESTAMP_TZ",
    BOOLEAN: "BOOLEAN",
} as const;

export type DeclarativeColumnDataTypeEnum =
    typeof DeclarativeColumnDataTypeEnum[keyof typeof DeclarativeColumnDataTypeEnum];

/**
 * A database table.
 * @export
 * @interface DeclarativeTable
 */
export interface DeclarativeTable {
    /**
     * Table id.
     * @type {string}
     * @memberof DeclarativeTable
     */
    id: string;
    /**
     * Path to table.
     * @type {Array<string>}
     * @memberof DeclarativeTable
     */
    path: Array<string>;
    /**
     * Table type: TABLE or VIEW.
     * @type {string}
     * @memberof DeclarativeTable
     */
    type: string;
    /**
     * Table or view name prefix used in scan. Will be stripped when generating LDM.
     * @type {string}
     * @memberof DeclarativeTable
     */
    namePrefix?: string;
    /**
     * An array of physical columns
     * @type {Array<DeclarativeColumn>}
     * @memberof DeclarativeTable
     */
    columns: Array<DeclarativeColumn>;
}
/**
 * A physical data model (PDM) tables.
 * @export
 * @interface DeclarativeTables
 */
export interface DeclarativeTables {
    /**
     * An array of physical database tables.
     * @type {Array<DeclarativeTable>}
     * @memberof DeclarativeTables
     */
    tables: Array<DeclarativeTable>;
}
/**
 * A request containing all information critical to model scanning.
 * @export
 * @interface ScanRequest
 */
export interface ScanRequest {
    /**
     * A separator between prefixes and the names.
     * @type {string}
     * @memberof ScanRequest
     */
    separator: string;
    /**
     * A flag indicating whether the tables should be scanned.
     * @type {boolean}
     * @memberof ScanRequest
     */
    scanTables: boolean;
    /**
     * A flag indicating whether the views should be scanned.
     * @type {boolean}
     * @memberof ScanRequest
     */
    scanViews: boolean;
    /**
     * What schemata will be scanned.
     * @type {Array<string>}
     * @memberof ScanRequest
     */
    schemata?: Array<string>;
    /**
     * Tables starting with this prefix will be scanned. The prefix is then followed by the value of `separator` parameter. Given the table prefix is `out_table` and separator is `__`, the table with name like `out_table__customers` will be scanned.
     * @type {string}
     * @memberof ScanRequest
     */
    tablePrefix?: string;
    /**
     * Views starting with this prefix will be scanned. The prefix is then followed by the value of `separator` parameter. Given the view prefix is `out_view` and separator is `__`, the table with name like `out_view__us_customers` will be scanned.
     * @type {string}
     * @memberof ScanRequest
     */
    viewPrefix?: string;
}
/**
 * Result of scan of data source physical model.
 * @export
 * @interface ScanResultPdm
 */
export interface ScanResultPdm {
    /**
     *
     * @type {DeclarativeTables}
     * @memberof ScanResultPdm
     */
    pdm: DeclarativeTables;
    /**
     *
     * @type {Array<TableWarning>}
     * @memberof ScanResultPdm
     */
    warnings: Array<TableWarning>;
}
/**
 * Warnings related to single table.
 * @export
 * @interface TableWarning
 */
export interface TableWarning {
    /**
     * Table name.
     * @type {Array<string>}
     * @memberof TableWarning
     */
    name: Array<string>;
    /**
     * Warning message related to the table.
     * @type {Array<string>}
     * @memberof TableWarning
     */
    message?: Array<string>;
    /**
     *
     * @type {Array<ColumnWarning>}
     * @memberof TableWarning
     */
    columns: Array<ColumnWarning>;
}
/**
 * A request containing all information for testing data source definition.
 * @export
 * @interface TestDefinitionRequest
 */
export interface TestDefinitionRequest {
    /**
     * Type of database, where test should connect to.
     * @type {string}
     * @memberof TestDefinitionRequest
     */
    type: TestDefinitionRequestTypeEnum;
    /**
     * URL to database in JDBC format, where test should connect to.
     * @type {string}
     * @memberof TestDefinitionRequest
     */
    url: string;
    /**
     * Database schema.
     * @type {string}
     * @memberof TestDefinitionRequest
     */
    schema?: string;
    /**
     * Database user name.
     * @type {string}
     * @memberof TestDefinitionRequest
     */
    username?: string;
    /**
     * Database user password.
     * @type {string}
     * @memberof TestDefinitionRequest
     */
    password?: string;
    /**
     * Secret for token based authentication for data sources which supports it.
     * @type {string}
     * @memberof TestDefinitionRequest
     */
    token?: string;
    /**
     *
     * @type {Array<DataSourceParameter>}
     * @memberof TestDefinitionRequest
     */
    parameters?: Array<DataSourceParameter>;
}

export const TestDefinitionRequestTypeEnum = {
    POSTGRESQL: "POSTGRESQL",
    REDSHIFT: "REDSHIFT",
    VERTICA: "VERTICA",
    SNOWFLAKE: "SNOWFLAKE",
    ADS: "ADS",
    BIGQUERY: "BIGQUERY",
    MSSQL: "MSSQL",
    PRESTO: "PRESTO",
    DREMIO: "DREMIO",
    DRILL: "DRILL",
    GREENPLUM: "GREENPLUM",
    AZURESQL: "AZURESQL",
    SYNAPSESQL: "SYNAPSESQL",
} as const;

export type TestDefinitionRequestTypeEnum =
    typeof TestDefinitionRequestTypeEnum[keyof typeof TestDefinitionRequestTypeEnum];

/**
 * A request containing all information for testing existing data source.
 * @export
 * @interface TestRequest
 */
export interface TestRequest {
    /**
     * URL to database in JDBC format, where test should connect to.
     * @type {string}
     * @memberof TestRequest
     */
    url?: string;
    /**
     * Database schema.
     * @type {string}
     * @memberof TestRequest
     */
    schema?: string;
    /**
     * Database user name.
     * @type {string}
     * @memberof TestRequest
     */
    username?: string;
    /**
     * Database user password.
     * @type {string}
     * @memberof TestRequest
     */
    password?: string;
    /**
     * Secret for token based authentication for data sources which supports it.
     * @type {string}
     * @memberof TestRequest
     */
    token?: string;
    /**
     * Enable caching of intermediate results.
     * @type {boolean}
     * @memberof TestRequest
     */
    enableCaching?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof TestRequest
     */
    cachePath?: Array<string>;
    /**
     *
     * @type {Array<DataSourceParameter>}
     * @memberof TestRequest
     */
    parameters?: Array<DataSourceParameter>;
}
/**
 * Response from data source testing.
 * @export
 * @interface TestResponse
 */
export interface TestResponse {
    /**
     * A flag indicating whether test passed or not.
     * @type {boolean}
     * @memberof TestResponse
     */
    successful: boolean;
    /**
     * Field containing more details in case of a failure. Details are available to a privileged user only.
     * @type {string}
     * @memberof TestResponse
     */
    error?: string;
}

/**
 * ActionsApi - axios parameter creator
 * @export
 */
export const ActionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * It scans a database and reads metadata. The result of the request contains a list of schema names of a database.
         * @summary Get a list of schema names of a database
         * @param {string} dataSourceId Data source id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDataSourceSchemata: async (
            dataSourceId: string,
            options: AxiosRequestConfig = {},
        ): Promise<RequestArgs> => {
            // verify required parameter 'dataSourceId' is not null or undefined
            assertParamExists("getDataSourceSchemata", "dataSourceId", dataSourceId);
            const localVarPath = `/api/v1/actions/dataSources/{dataSourceId}/scanSchemata`.replace(
                `{${"dataSourceId"}}`,
                encodeURIComponent(String(dataSourceId)),
            );
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: "GET", ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * It scans a database and transforms its metadata to a declarative definition of the physical data model (PDM). The result of the request contains the mentioned physical data model (PDM) of a database within warning, for example, about unsupported columns.
         * @summary Scan a database to get a physical data model (PDM)
         * @param {string} dataSourceId Data source id
         * @param {ScanRequest} scanRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scanDataSource: async (
            dataSourceId: string,
            scanRequest: ScanRequest,
            options: AxiosRequestConfig = {},
        ): Promise<RequestArgs> => {
            // verify required parameter 'dataSourceId' is not null or undefined
            assertParamExists("scanDataSource", "dataSourceId", dataSourceId);
            // verify required parameter 'scanRequest' is not null or undefined
            assertParamExists("scanDataSource", "scanRequest", scanRequest);
            const localVarPath = `/api/v1/actions/dataSources/{dataSourceId}/scan`.replace(
                `{${"dataSourceId"}}`,
                encodeURIComponent(String(dataSourceId)),
            );
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter["Content-Type"] = "application/json";

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            const needsSerialization =
                typeof scanRequest !== "string" ||
                localVarRequestOptions.headers["Content-Type"] === "application/json";
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(scanRequest !== undefined ? scanRequest : {})
                : scanRequest || "";

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Test if it is possible to connect to a database using an existing data source definition.
         * @summary Test data source connection by data source id
         * @param {string} dataSourceId Data source id
         * @param {TestRequest} testRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testDataSource: async (
            dataSourceId: string,
            testRequest: TestRequest,
            options: AxiosRequestConfig = {},
        ): Promise<RequestArgs> => {
            // verify required parameter 'dataSourceId' is not null or undefined
            assertParamExists("testDataSource", "dataSourceId", dataSourceId);
            // verify required parameter 'testRequest' is not null or undefined
            assertParamExists("testDataSource", "testRequest", testRequest);
            const localVarPath = `/api/v1/actions/dataSources/{dataSourceId}/test`.replace(
                `{${"dataSourceId"}}`,
                encodeURIComponent(String(dataSourceId)),
            );
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter["Content-Type"] = "application/json";

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            const needsSerialization =
                typeof testRequest !== "string" ||
                localVarRequestOptions.headers["Content-Type"] === "application/json";
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(testRequest !== undefined ? testRequest : {})
                : testRequest || "";

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Test if it is possible to connect to a database using a connection provided by the data source definition in the request body.
         * @summary Test connection by data source definition
         * @param {TestDefinitionRequest} testDefinitionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testDataSourceDefinition: async (
            testDefinitionRequest: TestDefinitionRequest,
            options: AxiosRequestConfig = {},
        ): Promise<RequestArgs> => {
            // verify required parameter 'testDefinitionRequest' is not null or undefined
            assertParamExists("testDataSourceDefinition", "testDefinitionRequest", testDefinitionRequest);
            const localVarPath = `/api/v1/actions/dataSource/test`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter["Content-Type"] = "application/json";

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            const needsSerialization =
                typeof testDefinitionRequest !== "string" ||
                localVarRequestOptions.headers["Content-Type"] === "application/json";
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(testDefinitionRequest !== undefined ? testDefinitionRequest : {})
                : testDefinitionRequest || "";

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};

/**
 * ActionsApi - functional programming interface
 * @export
 */
export const ActionsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = ActionsApiAxiosParamCreator(configuration);
    return {
        /**
         * It scans a database and reads metadata. The result of the request contains a list of schema names of a database.
         * @summary Get a list of schema names of a database
         * @param {string} dataSourceId Data source id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDataSourceSchemata(
            dataSourceId: string,
            options?: AxiosRequestConfig,
        ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataSourceSchemata>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDataSourceSchemata(
                dataSourceId,
                options,
            );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * It scans a database and transforms its metadata to a declarative definition of the physical data model (PDM). The result of the request contains the mentioned physical data model (PDM) of a database within warning, for example, about unsupported columns.
         * @summary Scan a database to get a physical data model (PDM)
         * @param {string} dataSourceId Data source id
         * @param {ScanRequest} scanRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async scanDataSource(
            dataSourceId: string,
            scanRequest: ScanRequest,
            options?: AxiosRequestConfig,
        ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScanResultPdm>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.scanDataSource(
                dataSourceId,
                scanRequest,
                options,
            );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Test if it is possible to connect to a database using an existing data source definition.
         * @summary Test data source connection by data source id
         * @param {string} dataSourceId Data source id
         * @param {TestRequest} testRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testDataSource(
            dataSourceId: string,
            testRequest: TestRequest,
            options?: AxiosRequestConfig,
        ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testDataSource(
                dataSourceId,
                testRequest,
                options,
            );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Test if it is possible to connect to a database using a connection provided by the data source definition in the request body.
         * @summary Test connection by data source definition
         * @param {TestDefinitionRequest} testDefinitionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testDataSourceDefinition(
            testDefinitionRequest: TestDefinitionRequest,
            options?: AxiosRequestConfig,
        ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testDataSourceDefinition(
                testDefinitionRequest,
                options,
            );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    };
};

/**
 * ActionsApi - factory interface
 * @export
 */
export const ActionsApiFactory = function (
    configuration?: Configuration,
    basePath?: string,
    axios?: AxiosInstance,
) {
    const localVarFp = ActionsApiFp(configuration);
    return {
        /**
         * It scans a database and reads metadata. The result of the request contains a list of schema names of a database.
         * @summary Get a list of schema names of a database
         * @param {ActionsApiGetDataSourceSchemataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDataSourceSchemata(
            requestParameters: ActionsApiGetDataSourceSchemataRequest,
            options?: AxiosRequestConfig,
        ): AxiosPromise<DataSourceSchemata> {
            return localVarFp
                .getDataSourceSchemata(requestParameters.dataSourceId, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * It scans a database and transforms its metadata to a declarative definition of the physical data model (PDM). The result of the request contains the mentioned physical data model (PDM) of a database within warning, for example, about unsupported columns.
         * @summary Scan a database to get a physical data model (PDM)
         * @param {ActionsApiScanDataSourceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scanDataSource(
            requestParameters: ActionsApiScanDataSourceRequest,
            options?: AxiosRequestConfig,
        ): AxiosPromise<ScanResultPdm> {
            return localVarFp
                .scanDataSource(requestParameters.dataSourceId, requestParameters.scanRequest, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Test if it is possible to connect to a database using an existing data source definition.
         * @summary Test data source connection by data source id
         * @param {ActionsApiTestDataSourceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testDataSource(
            requestParameters: ActionsApiTestDataSourceRequest,
            options?: AxiosRequestConfig,
        ): AxiosPromise<TestResponse> {
            return localVarFp
                .testDataSource(requestParameters.dataSourceId, requestParameters.testRequest, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Test if it is possible to connect to a database using a connection provided by the data source definition in the request body.
         * @summary Test connection by data source definition
         * @param {ActionsApiTestDataSourceDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testDataSourceDefinition(
            requestParameters: ActionsApiTestDataSourceDefinitionRequest,
            options?: AxiosRequestConfig,
        ): AxiosPromise<TestResponse> {
            return localVarFp
                .testDataSourceDefinition(requestParameters.testDefinitionRequest, options)
                .then((request) => request(axios, basePath));
        },
    };
};

/**
 * ActionsApi - interface
 * @export
 * @interface ActionsApi
 */
export interface ActionsApiInterface {
    /**
     * It scans a database and reads metadata. The result of the request contains a list of schema names of a database.
     * @summary Get a list of schema names of a database
     * @param {ActionsApiGetDataSourceSchemataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApiInterface
     */
    getDataSourceSchemata(
        requestParameters: ActionsApiGetDataSourceSchemataRequest,
        options?: AxiosRequestConfig,
    ): AxiosPromise<DataSourceSchemata>;

    /**
     * It scans a database and transforms its metadata to a declarative definition of the physical data model (PDM). The result of the request contains the mentioned physical data model (PDM) of a database within warning, for example, about unsupported columns.
     * @summary Scan a database to get a physical data model (PDM)
     * @param {ActionsApiScanDataSourceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApiInterface
     */
    scanDataSource(
        requestParameters: ActionsApiScanDataSourceRequest,
        options?: AxiosRequestConfig,
    ): AxiosPromise<ScanResultPdm>;

    /**
     * Test if it is possible to connect to a database using an existing data source definition.
     * @summary Test data source connection by data source id
     * @param {ActionsApiTestDataSourceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApiInterface
     */
    testDataSource(
        requestParameters: ActionsApiTestDataSourceRequest,
        options?: AxiosRequestConfig,
    ): AxiosPromise<TestResponse>;

    /**
     * Test if it is possible to connect to a database using a connection provided by the data source definition in the request body.
     * @summary Test connection by data source definition
     * @param {ActionsApiTestDataSourceDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApiInterface
     */
    testDataSourceDefinition(
        requestParameters: ActionsApiTestDataSourceDefinitionRequest,
        options?: AxiosRequestConfig,
    ): AxiosPromise<TestResponse>;
}

/**
 * Request parameters for getDataSourceSchemata operation in ActionsApi.
 * @export
 * @interface ActionsApiGetDataSourceSchemataRequest
 */
export interface ActionsApiGetDataSourceSchemataRequest {
    /**
     * Data source id
     * @type {string}
     * @memberof ActionsApiGetDataSourceSchemata
     */
    readonly dataSourceId: string;
}

/**
 * Request parameters for scanDataSource operation in ActionsApi.
 * @export
 * @interface ActionsApiScanDataSourceRequest
 */
export interface ActionsApiScanDataSourceRequest {
    /**
     * Data source id
     * @type {string}
     * @memberof ActionsApiScanDataSource
     */
    readonly dataSourceId: string;

    /**
     *
     * @type {ScanRequest}
     * @memberof ActionsApiScanDataSource
     */
    readonly scanRequest: ScanRequest;
}

/**
 * Request parameters for testDataSource operation in ActionsApi.
 * @export
 * @interface ActionsApiTestDataSourceRequest
 */
export interface ActionsApiTestDataSourceRequest {
    /**
     * Data source id
     * @type {string}
     * @memberof ActionsApiTestDataSource
     */
    readonly dataSourceId: string;

    /**
     *
     * @type {TestRequest}
     * @memberof ActionsApiTestDataSource
     */
    readonly testRequest: TestRequest;
}

/**
 * Request parameters for testDataSourceDefinition operation in ActionsApi.
 * @export
 * @interface ActionsApiTestDataSourceDefinitionRequest
 */
export interface ActionsApiTestDataSourceDefinitionRequest {
    /**
     *
     * @type {TestDefinitionRequest}
     * @memberof ActionsApiTestDataSourceDefinition
     */
    readonly testDefinitionRequest: TestDefinitionRequest;
}

/**
 * ActionsApi - object-oriented interface
 * @export
 * @class ActionsApi
 * @extends {BaseAPI}
 */
export class ActionsApi extends BaseAPI implements ActionsApiInterface {
    /**
     * It scans a database and reads metadata. The result of the request contains a list of schema names of a database.
     * @summary Get a list of schema names of a database
     * @param {ActionsApiGetDataSourceSchemataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApi
     */
    public getDataSourceSchemata(
        requestParameters: ActionsApiGetDataSourceSchemataRequest,
        options?: AxiosRequestConfig,
    ) {
        return ActionsApiFp(this.configuration)
            .getDataSourceSchemata(requestParameters.dataSourceId, options)
            .then((request) => request(this.axios, this.basePath));
    }

    /**
     * It scans a database and transforms its metadata to a declarative definition of the physical data model (PDM). The result of the request contains the mentioned physical data model (PDM) of a database within warning, for example, about unsupported columns.
     * @summary Scan a database to get a physical data model (PDM)
     * @param {ActionsApiScanDataSourceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApi
     */
    public scanDataSource(requestParameters: ActionsApiScanDataSourceRequest, options?: AxiosRequestConfig) {
        return ActionsApiFp(this.configuration)
            .scanDataSource(requestParameters.dataSourceId, requestParameters.scanRequest, options)
            .then((request) => request(this.axios, this.basePath));
    }

    /**
     * Test if it is possible to connect to a database using an existing data source definition.
     * @summary Test data source connection by data source id
     * @param {ActionsApiTestDataSourceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApi
     */
    public testDataSource(requestParameters: ActionsApiTestDataSourceRequest, options?: AxiosRequestConfig) {
        return ActionsApiFp(this.configuration)
            .testDataSource(requestParameters.dataSourceId, requestParameters.testRequest, options)
            .then((request) => request(this.axios, this.basePath));
    }

    /**
     * Test if it is possible to connect to a database using a connection provided by the data source definition in the request body.
     * @summary Test connection by data source definition
     * @param {ActionsApiTestDataSourceDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApi
     */
    public testDataSourceDefinition(
        requestParameters: ActionsApiTestDataSourceDefinitionRequest,
        options?: AxiosRequestConfig,
    ) {
        return ActionsApiFp(this.configuration)
            .testDataSourceDefinition(requestParameters.testDefinitionRequest, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
