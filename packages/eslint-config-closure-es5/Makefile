# Copyright 2017 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

MOCHA := node_modules/mocha/bin/mocha --no-colors

test:
	npm test

test-summary:
	npm test -- dot

develop:
	yarn link eslint-plugin-closure
	yarn link eslint-config-tester
	yarn link eslint-config-closure-base
	yarn link
