rem cd to current dectory
cd %cd%
rem open a new start gulp
start cmd /k "gulp"
rem store current dectory's name in %%~nxa and start nodejs project
for %%a in ("%cd%") do start cmd /k "set DEBUG="+%%~nxa+":* & npm start"