import {TestService} from '../gen/exportclient';
describe('spec.MethodExportClient', function () {
    it('should have option "exportclient"', function () {
       console.debug(TestService.methods[1].options);
       expect(TestService.methods[1].options).toBeDefined();
       if (TestService.methods[1].options) {
        expect(TestService.methods[1].options["blocker.exportclient"]).toBe(0);
       }
    });
})