#!/bin/bash

python -m SimpleHTTPServer 8888 &
open -a "/Applications/Google Chrome.app" 'http://localhost:8888/'
