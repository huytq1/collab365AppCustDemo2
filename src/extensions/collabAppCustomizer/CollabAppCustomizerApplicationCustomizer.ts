import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

import * as strings from 'CollabAppCustomizerApplicationCustomizerStrings';

const LOG_SOURCE: string = 'CollabAppCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ICollabAppCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class CollabAppCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<ICollabAppCustomizerApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    alert(`Hello from ${strings.Title}:\n\n${message}`);

    return Promise.resolve<void>();
  }
}
/**
 * use this url to test:
 * Replace "https://clouddesignboxdev.sharepoint.com/sites/team" with the URL of your test site
 * Team site
 * https://clouddesignboxdev.sharepoint.com/sites/team?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"92a422b6-b906-42c9-9c40-685b7ddc6593":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"testMessage":"Hello as property!"}}}
 * Communication site
 * https://clouddesignboxdev.sharepoint.com/sites/communication?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"92a422b6-b906-42c9-9c40-685b7ddc6593":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"testMessage":"Hello as property!"}}}
 */