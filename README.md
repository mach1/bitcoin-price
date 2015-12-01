# Bitcoin price

A small npm module to display Bitcoin price in USD from
coindesk API.

####To use:

1. Install using `npm install -g bitcoin-price`
2. Add to your `~/.tmux.conf`

####Different currencies

`bitcoin-price -c EUR` to display price in euros.
Available options are: USD (default), EUR, GBP

####Graph of changes in last 24h

For this you must have `spark` available

`bitcoin-price -g | spark` to get graph of last 24h

####Example tmux configuration:
```
set -g status-right-length 60
set -g status-right "#(bitcoin-price) :: #(battery -t) #[fg=blue]:: %d %b %Y #[fg=cyan]::%l:%M %p "
set -g status-interval 30
```

![Image of tmux statusbar]
(https://github.com/mach1/bitcoin-price/blob/master/bitcoin-price/sample.png?raw=true)
