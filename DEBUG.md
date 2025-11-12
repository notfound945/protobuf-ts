# Debug commond

## Run the test cases for export_client option
```bash
npx turbo run test --filter=@protobuf-ts/test-export_client --force
```

- test the function of exportclient with `npx protoc --ts_out=export_client:. --plugin=protoc-gen-ts=./packages/plugin/bin/protoc-gen-ts \
  --proto_path ./packages/proto ./packages/proto/exportclient.proto`

test the export_client option:

```
npx turbo run test --filter=@protobuf-ts/test-export_client
```


test the export_console option:

```
npx turbo run test --filter=@protobuf-ts/test-export_console
```