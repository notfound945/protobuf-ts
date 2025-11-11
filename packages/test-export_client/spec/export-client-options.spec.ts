import { ExportClientService } from "../gen/export-client";

describe("ExportClientService.EmptyOptionMethod", function () {
  it('should have option "exportclient"', function () {
    const method = ExportClientService?.methods?.find(
      (item) => item.name === "EmptyOptionMethod"
    );
    expect(method?.options?.['blocker.exportclient']).toBeUndefined();
  });
});
describe("spec.ServiceWithExportClient.MethodWithExportClient0", function () {
  it('should have option "exportclient"', function () {
    const method = ExportClientService?.methods?.find(
      (item) => item.name === "MethodWithExportClient0"
    );
    expect(method).toBeUndefined;
  });
});

describe("spec.ServiceWithExportClient.MethodWithExportClient1", function () {
  it("MethodWithExportClient1 should be defined", function () {
    const method = ExportClientService?.methods?.find(
      (item) => item.name === "MethodWithExportClient1"
    );
    expect(method).toBeDefined();
    expect(method?.options["blocker.exportclient"]).toBe(1);
  });
  it("MethodUseReferencedMessage should be undefined", function () {
    const method = ExportClientService?.methods?.find(
      (item) => item.name === "MethodUseReferencedMessage"
    );
    expect(method).toBeUndefined();
  });
});

describe("spec.ServiceWithExportClient I/O message visibility", function () {
  const generateTsCode = require("../gen/export-client");
  it("ServiceWithExportClient.Req should be defined", function () {
    expect(generateTsCode?.Req).toBeDefined();
  });
  it("ServiceWithExportClient.IgnoredClientReq should be undefined", function () {
    expect(generateTsCode?.IgnoredClientReq).toBeUndefined();
  });

  it("ServiceWithExportClient.IgnoredClientResp should be undefined", function () {
    expect(generateTsCode?.IgnoredClientResp).toBeUndefined();
  });
});


describe("spec.ServiceWithExportClient.GetEmbeddedMessageWithEnum", function () {
  const generateTsCode = require("../gen/export-client");

  it("GetEmbeddedMessageWithEnum should be defined", function () {
    const method = ExportClientService?.methods?.find(
      (item) => item.name === "GetEmbeddedMessageWithEnum"
    );
    expect(method).toBeUndefined();
  });

  it('spec.GetEmbeddedMessageWithEnumReq_WeatherInfo should be undefined', function () {
    expect(generateTsCode?.GetEmbeddedMessageWithEnumReq_WeatherInfo).toBeUndefined();
  });
});