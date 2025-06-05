var grpc = require("@grpc/grpc-js");

var notif = require("../proto/proto-gen/notif-send_pb")
var protoLoader = require("@grpc/proto-loader");
var server = new grpc.Server();
var notifService = require("../services/notif.service").init();
var grpcService = require("../services/grpc.service")




//notifService.sendEmail("danikolotasvili@gmail.com");
const PROTO_PATH = __dirname + "/../proto/notif-send.proto";


const protoDef = protoLoader.loadSync(PROTO_PATH);
const notifProto = grpc.loadPackageDefinition(protoDef).notif;
const address = 'localhost:51234';

function runGrpcServer() {
  server.addService(notifProto.TriggerNotif.service, { Notif: grpcService.sendNotif })
  server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`grpc server running at ${address}`);
    server.start();
  });
}
runGrpcServer();

