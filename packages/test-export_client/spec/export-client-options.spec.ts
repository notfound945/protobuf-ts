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
      ).toBe(1);
    }
  });
});

describe("spec.ServiceWithExportClient.MethodWithExportClient1", function () {
  // it('should not have option "exportclient"', function () {
  //   console.debug(ServiceWithExportClient.methods[2].options);
  //   expect(ServiceWithExportClient.methods[2].options).toBeDefined();
  //   if (ServiceWithExportClient.methods[2].options) {
  //     expect(
  //       ServiceWithExportClient.methods[2].options["blocker.exportclient"]
  //     ).toBe(1);
  //   }
  // });
  const GenerateTsCode = require("../gen/export-client");

  it('MethodWithExportClient1 should be undefined', function () {
    expect(ServiceWithExportClient.methods[2]).toBeUndefined();
    // Equivalent to:
    expect(GenerateTsCode?.MethodWithExportClient1).toBeUndefined();
  });
  it('MethodUseReferencedMessage should be undefined', function () {
    expect(GenerateTsCode?.MethodUseReferencedMessage).toBeUndefined();
  });

});

describe("spec.ServiceWithExportClient I/O message visibility", function () {
  const GenerateTsCode = require("../gen/export-client");
  it('ServiceWithExportClient.Req should be defined', function () {
    expect(GenerateTsCode?.Req).toBeDefined();
  })
  it('ServiceWithExportClient.IgnoredClientReq should be undefined', function () {
    expect(GenerateTsCode?.IgnoredClientReq).toBeUndefined();
  })

  it('ServiceWithExportClient.IgnoredClientResp should be undefined', function () {
    expect(GenerateTsCode?.IgnoredClientResp).toBeUndefined();
  })
})
