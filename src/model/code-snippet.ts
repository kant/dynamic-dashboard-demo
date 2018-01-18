import { environment } from '../environments/environment';

export enum CodeSnippetEnum {
  CreateDashboard = 'CreateDashboard',
  OpenDashboard = 'OpenDashboard'
  // TODO: Add all other snippets here to avoid hard coding
}

export class CodeSnippet {
  private code_sample: string = '';

   // TODO: change selection from number to CodeSnippetEnum for easier identification
   constructor(public selection: number, public code: string, public size: string) {
   }
}

this.code_sample = 'const response = await \n' +
                    '  this.http.post(' + `'/api/dde/session'` + ', \n' +
                    '  options).toPromise(); \n\n' +
                    'this.session.code = \n' +
                    '  response.json().sessionCode; \n\n' +
                    'this.session.id = \n' +
                    '  response.json().sessionId;';
export const NewSessionCS = new CodeSnippet(1, this.code_sample, 'large');

this.code_sample = 'this.api = new CognosApi({ \n' +
                    '   cognosRootURL: ' + `'` + environment.cognos_root_url + `',` + '\n' +
                    '   sessionCode: this.session.code, \n' +
                    '   node: document.getElementById(' + `'containerDivId3'` + ') \n' +
                    '}); \n\n' +
                    'await this.api.initialize();' ;
export const InitAPICS = new CodeSnippet(2, this.code_sample, 'small');

this.code_sample = 'this.dashboardAPI = await this.api.dashboard.createNew();';
export const CreateDashBoardCS = new CodeSnippet(3, this.code_sample, 'large');

this.code_sample = 'this.dashboardAPI.addSources([{ \n' +
                        '   module: csv_sample_module, \n' +
                        '   name:' + `'Test CSV Source'` + ', \n' +
                        '   id:' + `'myUniqueId789'` + '\n' +
                      '}]);';
export const CSVSourceCS = new CodeSnippet(4, this.code_sample, 'small');

this.code_sample = 'this.dashboardAPI.addSources([{ \n' +
                        '   module: db2_sample_module, \n' +
                        '   name:' + `'Test DB2 Source'` + ', \n' +
                        '   id:' + `'myUniqueId123'` + '\n' +
                      '}]);';
export const DB2SourceCS = new CodeSnippet(5, this.code_sample, 'small');

this.code_sample = 'var protectedSampleModule = this.getProtectedSampleModule(this.db2_sample_module); \n' +
                        'this.dashboardAPI.addSources([{ \n' +
                        '   module: protectedSampleModule, \n' +
                        '   name:' + `'Protected DB2 Source'` + ', \n' +
                        '   id:' + `'myUniqueId456'` + '\n' +
                      '}]);';
export const ProtectedDB2SourceCS = new CodeSnippet(6, this.code_sample, 'small');


this.code_sample = 'var protectedSampleModule = this.getProtectedSampleModule(this.csv_sample_module); \n' +
                        'this.dashboardAPI.addSources([{ \n' +
                        '   module: protectedSampleModule, \n' +
                        '   name:' + `'Protected CSV Source'` + ', \n' +
                        '   id:' + `'myUniqueId987'` + '\n' +
                      '}]);';
export const ProtectedCSVSourceCS = new CodeSnippet(7, this.code_sample, 'small');


// set dashboard mode
this.code_sample = 'TODO edit mode';
export const SetDashboardModeEditCS = new CodeSnippet(8, this.code_sample, 'small');

this.code_sample = 'TODO view mode';
export const SetDashboardModeViewCS = new CodeSnippet(9, this.code_sample, 'small');

this.code_sample = 'TODO edit group mode';
export const SetDashboardModeEditGroupCS = new CodeSnippet(10, this.code_sample, 'small');
