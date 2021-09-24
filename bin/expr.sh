DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

DESCRIPTORS=(
    third_party/googleapis/bazel-bin/google/api/expr/v1alpha1/expr_proto-descriptor-set.proto.bin
    third_party/googleapis/bazel-bin/google/rpc/status_proto-descriptor-set.proto.bin

    third_party/googleapis/bazel-bin/external/com_google_protobuf/any_proto-descriptor-set.proto.bin
    third_party/googleapis/bazel-bin/external/com_google_protobuf/duration_proto-descriptor-set.proto.bin
    third_party/googleapis/bazel-bin/external/com_google_protobuf/empty_proto-descriptor-set.proto.bin
    third_party/googleapis/bazel-bin/external/com_google_protobuf/struct_proto-descriptor-set.proto.bin
    third_party/googleapis/bazel-bin/external/com_google_protobuf/timestamp_proto-descriptor-set.proto.bin
)

mkdir -p ./src/parser/expr

protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--descriptor_set_in=$(IFS=:; printf '%s' "${DESCRIPTORS[*]}") \
-I=third_party/googleapis/bazel-googleapis \
--ts_out=./src/parser/expr \
third_party/googleapis/bazel-googleapis/google/api/expr/v1alpha1/*.proto
