import Application from 'simrankitchen/app';
import config from 'simrankitchen/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
