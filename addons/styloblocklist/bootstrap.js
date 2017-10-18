/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* exported install, uninstall, startup, shutdown */
/* eslint no-implicit-globals: "off" */

const {classes: Cc, interfaces: Ci, utils: Cu} = Components;

const {Preferences} = Cu.import("resource://gre/modules/Preferences.jsm", {});
const {Services} = Cu.import("resource://gre/modules/Services.jsm");

const PREF_STYLO_BLOCKLIST_ENABLED = "layout.css.stylo-blocklist.enabled";
const PREF_STYLO_BLOCKLIST_DOMAINS = "layout.css.stylo-blocklist.blocked_domains";
/**
 * TODO: Assign a comma-separated string to BLOCKED_DOMAINS to set/reset the
 *       stylo blocklist.
 *       ex: const BLOCKED_DOMAINS = [
 *             "example1.com",
 *             "example2.com",
 *           ].join(",");
 */
const BLOCKED_DOMAINS = "";

function install() {
  Preferences.set(PREF_STYLO_BLOCKLIST_ENABLED, true);
  Preferences.set(PREF_STYLO_BLOCKLIST_DOMAINS, BLOCKED_DOMAINS);
  // Flush the preferences to disk
  Services.prefs.savePrefFile(null);
}

function uninstall() {}

function startup() {}

function shutdown(data, reason) {}
