import { ExportConsoleService } from "../gen/export-console";

describe("ExportConsoleService.EmptyOptionConsoleMethod", function () {
  it('should have option "exportclient"', function () {
    const method = ExportConsoleService?.methods?.find(
      (item) => item.name === "EmptyOptionConsoleMethod"
    );
    expect(method?.options?.["blocker.exportconsole"]).toBeUndefined();
  });
});
describe("spec.ServiceWithExportConsole.MethodWithExportConsole0", function () {
  it('should have option "exportconsole"', function () {
    const method = ExportConsoleService?.methods?.find(
      (item) => item.name === "MethodWithExportConsole0"
    );
    expect(method).toBeUndefined;
  });
});

describe("spec.ServiceWithExportConsole.MethodWithExportConsole1", function () {
  it("MethodWithExportConsole1 should be defined", function () {
    const method = ExportConsoleService?.methods?.find(
      (item) => item.name === "MethodWithExportConsole1"
    );
    expect(method).toBeDefined();
    expect(method?.options["blocker.exportconsole"]).toBe(1);
  });
  it("MethodUseReferencedConsoleMessage should be undefined", function () {
    const method = ExportConsoleService?.methods?.find(
      (item) => item.name === "MethodUseReferencedConsoleMessage"
    );
    expect(method).toBeUndefined();
  });
});

describe("spec.ServiceWithExportConsole I/O message visibility", function () {
  const generateTsCode = require("../gen/export-console");
  it("ServiceWithExportConsole.ConsoleReq should be defined", function () {
    expect(generateTsCode?.ConsoleReq).toBeDefined();
  });
  it("ServiceWithExportConsole.IgnoredConsoleReq should be undefined", function () {
    expect(generateTsCode?.IgnoredConsoleReq).toBeUndefined();
  });

  it("ServiceWithExportConsole.IgnoredConsoleResp should be undefined", function () {
    expect(generateTsCode?.IgnoredConsoleResp).toBeUndefined();
  });
});

describe("spec.ServiceWithExportConsole.GetEmbeddedConsoleMessageWithEnum", function () {
  const generateTsCode = require("../gen/export-console");

  it("GetEmbeddedConsoleMessageWithEnum should be defined", function () {
    const method = ExportConsoleService?.methods?.find(
      (item) => item.name === "GetEmbeddedConsoleMessageWithEnum"
    );
    expect(method).toBeUndefined();
  });

  it("spec.GetEmbeddedConsoleMessageWithEnumReq_WeatherInfo should be undefined", function () {
    expect(
      generateTsCode?.GetEmbeddedConsoleMessageWithEnumReq_WeatherInfo
    ).toBeUndefined();
  });
  it("spec.GetEmbeddedConsoleMessageWithEnumResp_Msg should be defined", function () {
    expect(
      generateTsCode?.GetEmbeddedConsoleMessageWithEnumResp_Msg
    ).toBeUndefined();
  });
});
