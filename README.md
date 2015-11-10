# Bitcoin price

A small npm module to display Bitcoin price in USD from
coindesk API.

####To use:

1. Install using `npm install -g bitcoin-price`
2. Add to your `~/.tmux.conf`

####Example tmux configuration:
```
set -g status-right-length 60
set -g status-right "#(bitcoin-price) :: #(battery -t) #[fg=blue]:: %d %b %Y #[fg=cyan]::%l:%M %p "
set -g status-interval 30
```
