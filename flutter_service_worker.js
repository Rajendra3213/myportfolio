'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/RunnerTests/RunnerTests.swift": "6268cffb63d969b61f7b4e3005239256",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "5bd47c3ef1d1a261037c87fb3ddb9cfd",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/DebugProfile.entitlements": "6e164fc6ed6acb30c71fe12e29e49642",
"macos/Runner/Base.lproj/MainMenu.xib": "a41bc20792a7e771d7901124cdb8c835",
"macos/Runner/MainFlutterWindow.swift": "4a747b1f256d62a2bbb79bd976891eb5",
"macos/Runner/Configs/AppInfo.xcconfig": "8240700e0e70efe0085b03bc3ba9297f",
"macos/Runner/Configs/Debug.xcconfig": "0a7555f820f3e4371d88ec1c339d70ef",
"macos/Runner/Configs/Release.xcconfig": "d36330778580798c0d9c5a5b71501a0f",
"macos/Runner/Configs/Warnings.xcconfig": "e19c2368cf97e5f3eaf8de37cff2b341",
"macos/Runner/AppDelegate.swift": "ce90ac27873ef28bc53a7dbc142459e5",
"macos/Runner/Info.plist": "b945a5051bb1cca2d906ac0be98b629a",
"macos/Runner/Release.entitlements": "e6fde05dec64f9856d3978a4a5e4bf48",
"macos/Runner.xcodeproj/project.pbxproj": "8fb696ead7af4e696e1ece969b5ed82c",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "c0a234dbac4412670b4ab00d6fccd0d2",
"macos/Flutter/Flutter-Debug.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Flutter/Flutter-Release.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "b7c892d055925d9755c8ba7910a81cf1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "6270ef055743611c55e60488b033e409",
"index.html": "9600d9ae6df8f533f718b4681f16ee6a",
"/": "c87bf66e211cb09ccecaa84754808bdd",
"test/widget_test.dart": "cb2dd7128b72a5807c36cba95bd6bbc4",
"CNAME": "1b77b05dc89b430e9b51ddc53a96fcdb",
"main.dart.js": "84ded32fad3392f584bd46f3c11a122e",
"web/index.html": "c87bf66e211cb09ccecaa84754808bdd",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/manifest.json": "901d86fb8842ec0d66225a542131d689",
"pubspec.lock": "2308e418e593aac0a4b84c1205d5e56a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/RunnerTests/RunnerTests.swift": "a225a382d14d7b16b6f602a5c1d49331",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "283c9d8e1b189a1ff499b797ae94ed12",
"ios/Runner.xcodeproj/project.pbxproj": "d5ffb824bbe2b030a57c0d2de8b725c3",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "9565201a0f1b0d623e0c0445455d52a8",
"ios/Flutter/flutter_export_environment.sh": "836ce10606a87cbb984c0d1bda7dc34b",
"ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/AppFrameworkInfo.plist": "a25bf969a6a92bae1dbdf68f4e6e5b3b",
"ios/Flutter/Generated.xcconfig": "ab5160c2cf2563c26c3037da32b3c5ef",
"README.md": "ac18482fc28234fc361bcd7776f73e29",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pubspec.yaml": "83a5f06a5a8469e9face5b367523f12a",
"linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"linux/CMakeLists.txt": "be1cc04f1ae4440cb921632c12298468",
"linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"linux/my_application.cc": "ac3348888f9b2ecc49e45fe8f62ca1fe",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"android/app/build.gradle": "5a11fa0338fbeb0318e11a608920cdbe",
"android/app/src/profile/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/AndroidManifest.xml": "03aa431b4c4194edfa868c982d9fe804",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"android/app/src/debug/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/local.properties": "27088080fef0ad9515177bd2796d0c6f",
"android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "9954c54e2024747de137abef4cdd309c",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/build.gradle": "7632ea1d88d5a4f435b7fdb65214f4e3",
"android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"lib/main.dart": "3b1f9cdcabe394cba63000c29237b3e8",
"analysis_options.yaml": "90ca05185a2de012cebf6fb9f85f3598",
".dart_tool/package_config.json": "179f509d78b5423462bb0e5e0cf48d6b",
".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config_subset": "1290f6f5c2682c909decb9efca2fa326",
".dart_tool/version": "857ad7eb640a48b54d1dff0f70194996",
"windows/CMakeLists.txt": "302fd40539bb83f85e2902d840d94492",
"windows/runner/flutter_window.cpp": "13f3805c97491b594db63fae59e688aa",
"windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"windows/runner/utils.cpp": "c8ab2070ab710025a405b8e44dd7174d",
"windows/runner/runner.exe.manifest": "19a145783806442d541438903cc9be98",
"windows/runner/CMakeLists.txt": "e99a99b5cc82a168fc557eb23b8d5a96",
"windows/runner/win32_window.h": "5a4cf051798d7e6931ee0405a4523c8f",
"windows/runner/win32_window.cpp": "928e86a2be27eca688669dce6c9177d9",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"windows/runner/Runner.rc": "e9da37d227497f66dc7628a7347cc9d9",
"windows/runner/main.cpp": "3a8985ef77836fcfa1aaee2376b0394a",
"windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/CMakeLists.txt": "7fcf749e1f5907bc37e680385971ae1c",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
".git/ORIG_HEAD": "81a7ec575bb1ab20d5bdb6d66c24a1f6",
".git/config": "9a3823a1b6d1fc1aadc78d110cc5a273",
".git/objects/61/c6d92c1d753a3e5d98b1b77fb463e819797382": "1a531e65e4bf57702af51dfd5b7e094a",
".git/objects/95/201a78a67a97718cdae5ed8039d9cc2f5c9dd6": "eb314867523de88902da8cca252cfbd7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/0c/79406815821010896ec82b0c1525cd6bb6b5fa": "87243b572408fcc5d06ee5a100e0b577",
".git/objects/0c/b55b8dfa90469c9bfd3e2fc9ab3d3d0777027c": "025ca2ad49e5affda71638904b58bf7c",
".git/objects/50/029fc3877a44f6156343a9fa178af73644dec1": "61b08a25c2bd085c3287bb246e815489",
".git/objects/9b/1530795bcb0b12be66064e6fbc47f14e5144ae": "c753a014ad1c88d1143fb313d9d764f6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/71286765a6b238b59397ef7357b004e653c503": "2853029b6b5565cbf60f7de6035b6c4d",
".git/objects/3c/039a974f78af33becea255ed832d729b0a63c9": "d06d11d76e880969aeab3ad2b6577142",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5a/ecf7dc414ec9b807d93f6a5b8d676f5d1f0279": "4e97acc1070bb29f90711c9d09febe79",
".git/objects/33/498880785c7b77d584bcfd0a06966bf9ce6544": "23caaeaddb4bc710e62cfd1f81fbd2ec",
".git/objects/9d/abd79a750327c08552364232294f72d28e9fc6": "c2caf577bbecf309e87a27399f289c3f",
".git/objects/9c/590772f783bc66f0ea369a622035013fa4ac9e": "e87c18a3bfdf81ba08efda51aeb05e83",
".git/objects/02/96d91ed41eac09a01d3c3b5a162b6bac59624f": "3a027ec4218e0b35da285346cf0bfc06",
".git/objects/b5/3fb1c4acbe100c7a91f07564b7f1fa2d5bab12": "e811d0b34945c5ebde7da923776bcfd5",
".git/objects/ad/c407e761da8c3ae078dcc0c330b3a36bafdb85": "191e9a67575857ec725dcd00412ee0d0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/d7ff40de3da98f16b502aa024157c726dacfb3": "b1f7d70075f8adecd402ea5cbccd782d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/8af51770cd5fc43e90c8b094d37c40b1c28398": "0c270dae49c8cfeecae7eddd5242ec90",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f4/ab6ff5fa8db2580ef0780722db1b3251031378": "3ffbc15c00e299158daff6aadd8a0e65",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d9e25003aa5f88f418996a2587167770b4a26e": "25324b22a73b4ba4e20d45040f2d7189",
".git/objects/ee/0128d48dbf494bd10c6e02dfbae7fc0319ce13": "1a27543edf0cdd00e3365c262c13fe22",
".git/objects/e3/c9f3d29b46463f55ed1b7252edf6bbdaed4817": "dec7d51ddacce863e6eaed5e307241fb",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fb/7f1a91ce3672d85ff87f55a0fdc585d38e6cf3": "a126e312480cbb3293e9b510385a9037",
".git/objects/fb/4958c1dfab09b75878adda63f8097735893705": "5c58fab1037a84278e7222dfb6dddff6",
".git/objects/fb/b48e1f02b9963c4ab2236f332a6a9382137eb7": "522d12c82654b213ba4f68a0e4caf58c",
".git/objects/c6/aeeb16a6d7f754258bc7f3f2101d287976e6e6": "ea0f32909c0e06fc9256a959692bc0d3",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/18/d3996978f44c8ccf5fb1ba55548e41fa66e21a": "f3f7c2160954ee197c02df4b3a8fb547",
".git/objects/4b/db890caa03df025b57a871d903f98c20f210f3": "11db8cd3f394c9fff4b7d149659d62a1",
".git/objects/80/ebe4dd935c76e527e78d4e835460f586893b09": "28d239c9b1cd31db6c12a6bd75232426",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/8b1b307ed7ec9e25ea06395bb43ed17f076344": "fae5c7d706e202bbec8b21bf0ff50f29",
".git/objects/26/abef1b49b6b915383396a114e853ac7435ac47": "103ebb9a2e15b25e6b530e26c2974c02",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/76fb0c80d6bd6464e5fa0bb493dc25cb619d73": "c5fb35c8bc1feaee66d8d843223967ee",
".git/objects/07/e18a384d412a1df51edc7ddb9fba085055fc55": "ec275799f791cc6ca0e56eb9ba1f0463",
".git/objects/6e/e30807a72bc81d0d4756db96b1c89aaf16c1f7": "cbddffe77e433f309478480a32499719",
".git/objects/31/ff7c2f0e056178c43fddf4b11a371adbfde0b0": "8900d657deee13526f1953196ebc5952",
".git/objects/91/dfbc3dbca2c16ef02101f9f432695e2522ee17": "7260f2fe95deb59d77e8d976c06b38e4",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/986814b174fc672f7012bb4d93e10e05c6badf": "1479bf301a3e6f114d5a012b263bebc3",
".git/objects/53/f5bc71bccbb2596a148c811c099d286fa3a737": "f2bfdbc180d4d84f37166fa6fff68cab",
".git/objects/30/36e35f032d4fc2a650b8a028d9c432ac081314": "0f6c40238b3c2d0969e1816ca573eed8",
".git/objects/5e/f1a11c25d6402a5c200fe8c26d0f142c80ec49": "66a3e80bdc588f01c826ad8ab9e5364c",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/0e124423dbbee70cdc88670d5dd57a8ec75143": "8db1dee5458907ded34004a3e6d532b1",
".git/objects/06/e4693cec09711c6626b8bc2bb350ef648d7f17": "2433a467b363c3e9857c2c9900a26a68",
".git/objects/52/c155fbe6d1d3bf54e981cf50657ef681c044b4": "31260d1600db052e776f244383141319",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ff41dedae2e4618bbfffeea8b11417eac529c5": "49b3c4c9a5f939fe9cedc3f74bfb12e3",
".git/objects/a8/27a1a4cfb49242947ea7d972695db1463d4e5a": "c268e7846b10778e6eee7e89b3caac01",
".git/objects/de/ec90f99e92e2c47aa69047e2d0cbab9765a6e5": "0c2cf70b7e29623e90c03179c9460b0a",
".git/objects/a6/30ce2eb6f251e672acce6ea36f34fe07d0b011": "cc564e69d6e16876a670215577ce2a26",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/518d7258189a3fe5b1fc1237cc26549cab859a": "9c3d8cb97d9f7f0ce57f67f70774c38e",
".git/objects/e6/14748e7a15ab1a3d471c2069396ce7846f6f2a": "0b1e542ae5ab3fed5cca3fd05da82845",
".git/objects/f0/15cc235589e731babf3e7124c4b8a612b76a3d": "b124d25332da0944e32da021f5c64f5d",
".git/objects/e8/b913861ced03ea2e15cfec0925f5b41f0956ce": "6cec98ad26e5c89a87ff190ea8d778bd",
".git/objects/e7/56b867714329ed94197d06ff501b020d956df8": "609822bafb4a93a84f89e373ca4d2f33",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/1f76963ed7be0111889636e0724075052f24c6": "171e58c96f894c4c553ec454e24e7cd1",
".git/objects/2c/b75ba3a96f2a0add6e4572faed6c3813cf79b0": "5c39dfdae4561e1598785cc72450fbe0",
".git/objects/41/178f99d8beec05f1c00f85a54a2ee36910c137": "257d29aa750ab4370ad7b123608034c0",
".git/objects/48/09a7fa2f4085f489447e8eb7ea258573e5534d": "5799187da3073ff1266cc5d3250c2c11",
".git/objects/1e/d7c395427329bf28d8dc90f3ff874ed57847d4": "282e0e65240486a9f2d848167d380d0b",
".git/objects/8d/4eebf20665d5ae746c622a2bd42274b54d2bf1": "1af37619c66ce985101983d9c8fa0fe3",
".git/objects/15/8db021e376b7ac86642acde707929cba289f3f": "7c0d79e61f755d9ced829314ef028413",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/5db0287f086e17dfa1b269a488495c1c0b3965": "c4497ce5fc9ecce2477e49f415d36253",
".git/objects/49/79d5ba051fe1c0e9cfc641df7971fdb167d09f": "e58bd40a5f9e53280f72c9b9c703118e",
".git/objects/8e/82c70d1081e2857ada1b73395d4f42c2e8adc9": "26623a433e72cc0c70229cb55963874c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a2f66eb51e462552aad2c9bc076575d",
".git/logs/refs/heads/master": "9a2f66eb51e462552aad2c9bc076575d",
".git/logs/refs/remotes/origin/master": "240b87ecc72cd0ee38db06a30bf05a28",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "ac84db06c57f058fcd2df778fb6f905f",
".git/refs/remotes/origin/master": "ac84db06c57f058fcd2df778fb6f905f",
".git/index": "7c06b9e1dfd98bcaa22816d102376d99",
".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/FETCH_HEAD": "1502e1f3857f50af1ec057e928531512",
"web.iml": "731a1a3080009db8d4572ef3fb1679c3",
"assets/AssetManifest.json": "c723ea4074ab263838a750046ee3db53",
"assets/NOTICES": "87c50924bd376aee8293ebd008791cf6",
"assets/FontManifest.json": "ee6bb62f0f8dd8e0b331bc65d5644373",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7557bacbdd91bc3e7c7dacbc2f8638b7",
"assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/fonts/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"canvaskit/skwasm.js": "2e9d3b68c4c4b1d4154eaa08598dc048",
"canvaskit/skwasm.wasm": "374033d89d5c38fe6af6bb61a1c8ae13",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "1f952c5dc1c1aff2d177be5a9fc0e9ec",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f05ef6a3d45abce91b1cfeba71a709a1",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/libraries/Dart_SDK.xml": "cfa69904bc4f47ab82b2a06ec513b588",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
