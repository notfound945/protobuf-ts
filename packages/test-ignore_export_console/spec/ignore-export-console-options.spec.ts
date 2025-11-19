import { IgnoreExportConsoleService } from "../gen/ignore-export-console";

describe("IgnoreExportConsoleService.EmptyOptionConsoleMethod", function () {
  it('should have option "ignoreExportConsole"', function () {
    const method = IgnoreExportConsoleService?.methods?.find(
      (item) => item.name === "EmptyOptionConsoleMethod"
    );
    expect(method?.options?.["blocker.ignoreExportConsole"]).toBeUndefined();
  });
});
describe("spec.IgnoreExportConsoleService.MethodWithExportConsole0", function () {
  it('should have option "ignoreExportConsole"', function () {
    const method = IgnoreExportConsoleService?.methods?.find(
      (item) => item.name === "MethodWithExportConsole0"
    );
    expect(method).toBeUndefined;
  });
});

describe("spec.IgnoreExportConsoleService.MethodWithExportConsole1", function () {
  it("MethodWithExportConsole1 should be defined", function () {
    const method = IgnoreExportConsoleService?.methods?.find(
      (item) => item.name === "MethodWithExportConsole1"
    );
    expect(method).toBeDefined();
  });
  it("MethodUseReferencedConsoleMessage should be undefined", function () {
    const method = IgnoreExportConsoleService?.methods?.find(
      (item) => item.name === "MethodUseReferencedConsoleMessage"
    );
    expect(method).toBeUndefined();
  });
});

describe("spec.IgnoreExportConsoleService I/O message visibility", function () {
  const generateTsCode = require("../gen/ignore-export-console");
  it("IgnoreExportConsoleService.ConsoleReq should be defined", function () {
    expect(generateTsCode?.ConsoleReq).toBeDefined();
  });
  it("IgnoreExportConsoleService.IgnoredConsoleReq should be undefined", function () {
    expect(generateTsCode?.IgnoredConsoleReq).toBeUndefined();
  });

  it("IgnoreExportConsoleService.IgnoredConsoleResp should be undefined", function () {
    expect(generateTsCode?.IgnoredConsoleResp).toBeUndefined();
  });
});

describe("spec.IgnoreExportConsoleService.GetEmbeddedConsoleMessage", function () {
  it("GetEmbeddedConsoleMessage should be undefined", function () {
    const method = IgnoreExportConsoleService?.methods?.find(
      (item) => item.name === "GetEmbeddedConsoleMessage"
    );
    expect(method).toBeUndefined();
  });
});

describe("spec.IgnoreExportConsoleService.GetEmbeddedConsoleMessageWithEnum", function () {
  const generateTsCode = require("../gen/ignore-export-console");

  it("GetEmbeddedConsoleMessageWithEnum should be defined", function () {
    const method = IgnoreExportConsoleService?.methods?.find(
      (item) => item.name === "GetEmbeddedConsoleMessageWithEnum"
    );
    expect(method).toBeDefined();
    expect(method?.options?.["blocker.ignoreExportConsole"]).toBe(0);
  });

  it("spec.GetEmbeddedConsoleMessageWithEnumReq_WeatherInfo should be undefined", function () {
    expect(
      generateTsCode?.GetEmbeddedConsoleMessageWithEnumReq_WeatherInfo
    ).toBeDefined();
  });
  it("spec.GetEmbeddedConsoleMessageWithEnumResp_Msg should be defined", function () {
    expect(
      generateTsCode?.GetEmbeddedConsoleMessageWithEnumResp_Msg
    ).toBeDefined();
  });
});
