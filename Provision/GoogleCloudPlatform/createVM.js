const Compute = require('@google-cloud/compute');
const compute = new Compute();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async() => {
  try {
   const zone = await compute.zone('us-east1-b');
   const data = await zone.createVM(
      'arsh-ubuntuvm', 
      { os: 'ubuntu', 
        http: true,}
    ); 

   await sleep(1000);
  
  vm = zone.vm('arsh-ubuntuvm');
    const metadata = await vm.getMetadata();
    const ip = metadata[0].networkInterfaces[0].accessConfigs[0].natIP;
    console.log(ip);
  } catch (error) {
    console.error(error);
  }
})();