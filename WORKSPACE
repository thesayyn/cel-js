workspace(
    name = "cel-js",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "4681ca88d512d57196d064d1441549080d8d17d119174a1229d1717a16a4a489",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.0.0-beta.1/rules_nodejs-4.0.0-beta.1.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")


npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json"
)