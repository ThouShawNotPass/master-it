#!/usr/bin/python
# -*- coding: utf-8 -*-

from parameters import SupportedLanguages
from parameters import RunAPIParameters

from api_handlers import HackerEarthAPI

client_secret = '143ff8481e32b5f0210a6ae96a29f418474ac08e'

source = open('hackerearth/test_source.py', 'r').read()
lang = SupportedLanguages.PYTHON
compressed = 1
html = 0
params = RunAPIParameters(
        client_secret=client_secret, source=source,
        lang=lang, compressed=compressed, html=html)

api = HackerEarthAPI(params)

print('Compiling code..')
r = api.compile()
print(r.__dict__)

print('\nRunning code...')
r = api.run()
print(r.__dict__)
output = r.__dict__.get('output')

print('\nRun Output:')
print(output)