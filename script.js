const conditions = {
  normal: {title:"NORMAL FLOW", message:"Infusion is running normally.", flow:80, pressure:120, remaining:60, movement:"Normal", flowState:"Normal", pressureState:"Normal", tubeState:"Normal", airState:"None", levelState:"60%", type:"normal"},
  reduced: {title:"FLOW REDUCED", message:"Flow rate is lower than expected.", flow:42, pressure:148, remaining:56, movement:"Normal", flowState:"Reduced", pressureState:"High", tubeState:"Check", airState:"None", levelState:"56%", type:"warning"},
  kink: {title:"TUBE KINK DETECTED", message:"Possible bending or kinking in the IV line.", flow:18, pressure:171, remaining:54, movement:"Normal", flowState:"Low", pressureState:"High", tubeState:"Kink detected", airState:"None", levelState:"54%", type:"danger"},
  occlusion: {title:"OCCLUSION WARNING", message:"Possible partial or complete blockage detected.", flow:4, pressure:190, remaining:51, movement:"Normal", flowState:"Very low", pressureState:"High", tubeState:"Possible blockage", airState:"None", levelState:"51%", type:"danger"},
  air: {title:"AIR DETECTED", message:"Air-bubble condition detected in the simulated line.", flow:65, pressure:124, remaining:48, movement:"Normal", flowState:"Normal", pressureState:"Normal", tubeState:"Normal", airState:"Detected", levelState:"48%", type:"danger"},
  complete: {title:"INFUSION NEARLY COMPLETE", message:"The simulated IV bag is nearly empty.", flow:78, pressure:118, remaining:8, movement:"Normal", flowState:"Normal", pressureState:"Normal", tubeState:"Normal", airState:"None", levelState:"8%", type:"warning"},
  movement: {title:"SUDDEN LINE MOVEMENT", message:"Sudden movement or pull detected.", flow:61, pressure:126, remaining:44, movement:"Sudden", flowState:"Variable", pressureState:"Normal", tubeState:"Moved", airState:"None", levelState:"44%", type:"warning"}
};

const $ = id => document.getElementById(id);
const mainStatus = $("mainStatus");
const alertList = $("alertList");

function applyCondition(key){
  const c = conditions[key];
  $("flow").textContent = c.flow;
  $("pressure").textContent = c.pressure;
  $("remaining").textContent = c.remaining;
  $("movement").textContent = c.movement;
  $("statusTitle").textContent = c.title;
  $("statusMessage").textContent = c.message;
  $("flowState").textContent = c.flowState;
  $("pressureState").textContent = c.pressureState;
  $("tubeState").textContent = c.tubeState;
  $("airState").textContent = c.airState;
  $("levelState").textContent = c.levelState;

  mainStatus.className = "status-card " + (c.type === "danger" ? "status-danger" : c.type === "warning" ? "status-warning" : "");
  mainStatus.querySelector(".status-icon").textContent = c.type === "normal" ? "✓" : "!";
  addAlert(c);
}

function addAlert(c){
  if(alertList.querySelector(".empty")) alertList.innerHTML = "";
  const row = document.createElement("div");
  row.className = "alert " + (c.type === "normal" ? "normal" : "");
  row.innerHTML = `<span><b>${c.title}</b> — ${c.message}</span><time>${new Date().toLocaleTimeString()}</time>`;
  alertList.prepend(row);
}

document.querySelectorAll("[data-condition]").forEach(btn => {
  btn.addEventListener("click", () => applyCondition(btn.dataset.condition));
});

$("clearBtn").addEventListener("click", () => {
  alertList.innerHTML = '<div class="empty">No alerts yet. Test a condition above.</div>';
});

applyCondition("normal");
