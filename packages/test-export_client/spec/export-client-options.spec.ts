import { ServiceWithExportClient } from "../gen/export-client";

describe("spec.ServiceWithExportClient.EmptyOptionMethod", function () {
  it('should have option "exportclient"', function () {
    console.debug(ServiceWithExportClient.methods[0].options);
    expect(ServiceWithExportClient.methods[0].options).toBeDefined();
  });
});
describe("spec.ServiceWithExportClient.MethodWithExportClient0", function () {
  it('should have option "exportclient"', function () {
    console.debug(ServiceWithExportClient.methods[1].options);
    expect(ServiceWithExportClient.methods[1].options).toBeDefined();
    if (ServiceWithExportClient.methods[1].options) {
      expect(
        ServiceWithExportClient.methods[1].options["blocker.exportclient"]
      ).toBe(0);
    }
  });
});

describe("spec.ServiceWithExportClient.Method1", function () {
  it('should not have option "exportclient"', function () {
    console.debug(ServiceWithExportClient.methods[2].options);
    expect(ServiceWithExportClient.methods[2].options).toBeDefined();
    if (ServiceWithExportClient.methods[2].options) {
      expect(
        ServiceWithExportClient.methods[2].options["blocker.exportclient"]
      ).toBe(1);
    }
  });
});
