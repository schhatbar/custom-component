import { Config } from '@stencil/core';
import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'custom-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@schhatbar/custom-component-v3',
      outputType: 'component',
      directivesProxyFile: 'dist/custom-component/components.ts',
      directivesArrayFile: 'dist/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
