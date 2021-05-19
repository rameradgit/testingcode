$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/Login.feature");
formatter.feature({
  "name": "Testing sign in functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Valid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens the web application",
  "keyword": "Given "
});
formatter.step({
  "name": "Submits the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Login successful message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_REFUSED\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TGSLAP-2201\u0027, ip: \u0027192.168.1.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\tg0882\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58476}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 81c05aae94394c46ddeecda69a35ec6e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat steps.Common.open_web_browser(Common.java:70)\r\n\tat steps.Hook.BeforeScenario(Hook.java:15)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCore.run(JUnitCore.java:55)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:137)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:83)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:75)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:157)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:428)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:562)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:548)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User opens the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.userOpensTheWebApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Submits the \"admin\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.submitsTheAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Login successful message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.loginSuccessfulMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens the web application",
  "keyword": "Given "
});
formatter.step({
  "name": "Submits the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Login unsuccessful message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abc",
        "abc"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_REFUSED\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TGSLAP-2201\u0027, ip: \u0027192.168.1.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\tg0882\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58493}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bdbfb55693da5cc85835edb55c5fdfe0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat steps.Common.open_web_browser(Common.java:70)\r\n\tat steps.Hook.BeforeScenario(Hook.java:15)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCore.run(JUnitCore.java:55)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:137)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:83)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:75)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:157)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:428)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:562)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:548)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User opens the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.userOpensTheWebApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Submits the \"abc\" and \"abc\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.submitsTheAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Login unsuccessful message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.loginUnsuccessfulMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});