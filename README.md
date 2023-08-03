# counterJS
simple nodejs counter, with a polybar module.

Resets daily, log with timestamps is stored in .config/counterjs/logs, organized by date.

counterjs.ini is an example polybar module

## Usage
Before first start create a .config/counterjs/logs folder.

* add: Adds 1 to the daily counter
* get: Counts daily entries
* start: Copies the daily log to RAM, *this should be ran after every reboot or the count will not match.*

