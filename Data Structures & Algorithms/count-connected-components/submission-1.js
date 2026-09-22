class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = this.buildGraph(edges);
        const seen = new Set();

        let result = 0;

        for(let node = 0; node < n; node++) {
            if (seen.has(node)) continue;
            result++;
            this.explore(graph, node, seen);
        }

        return result;
    }

    explore(graph, node, seen) {
        if(seen.has(node)) return;
        seen.add(node);
        for(const neighbor of graph[node] ?? []) {
            this.explore(graph, neighbor, seen);
        }
    }

    buildGraph(edges) {
        const graph = {};
        for(const [u, v] of edges) {
            if(!graph[u]) graph[u] = [];
            if(!graph[v]) graph[v] = [];
            graph[u].push(v);
            graph[v].push(u);
        }
        return graph;
    } 
}
