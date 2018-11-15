import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable'

const dataHosts = [
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"},
  {themetype: "uj-2015", organization: true, adress: "www.dev.portal.uj.edu.pl", direction: true, theme: "UJ 2015", create: "2012-10-26 18:31:44.0", friendlyurl: "/zpu", groupid: 17996, modified: "2018-11-14 12:12:59.375", ssl: false, ssldata: "Thu Jan 01 00:00:00 GMT 1970", name: "Portal Uniwersytecki"}
];

  ReactDOM.render(
    <FilterableProductTable data={dataHosts} />,
    document.getElementById('excel')
  );