export interface Connection{
    start : Connector
    end : Connector
    leaderLine : typeof LeaderLine
}
export interface Connector{
    point : number
    itemId : number
}