#!/bin/sh 

if hash python3 2>/dev/null ; then 
	python3 -m http.server 5001 
elif hash python2 2>/dev/null ; then
	python2 -m SimpleHTTPServer 5001 
else 
	>&2 echo "Unable to run http server"
fi

