function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = [];
    let bridge_weight = 0;

    while (truck_weights.length > 0 || bridge.length > 0) {

        time++;

        bridge = bridge.map(truck => ({ weight: truck.weight, distance: truck.distance - 1 }));

        if (bridge.length > 0 && bridge[0].distance === 0) {
            bridge_weight -= bridge.shift().weight;
        }

        if (truck_weights.length > 0 && bridge_weight + truck_weights[0] <= weight) {
            bridge_weight += truck_weights[0];
            bridge.push({ weight: truck_weights.shift(), distance: bridge_length });
        }
    }

    return time;
}