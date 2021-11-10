export const service_wallet = 'mermer_wallet';
export const service_full_node = 'mermer_full_node';
export const service_farmer = 'mermer_farmer';
export const service_harvester = 'mermer_harvester';
export const service_simulator = 'mermer_full_node_simulator';
export const service_daemon = 'daemon';
export const service_plotter = 'mermer_plotter';

// Corresponds with outbound_message.py NodeTypes
export const service_connection_types = {
  1: 'Full Node',
  2: 'Harvester',
  3: 'Farmer',
  4: 'Timelord',
  5: 'Introducer',
  6: 'Wallet',
  7: 'Plotter',
};
