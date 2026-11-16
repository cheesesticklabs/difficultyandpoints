window.submitLessonToSheet=function(payload){
const endpoint=window.LESSON_SUBMISSION?.endpoint||'';
if(!/^https:\/\/script\.google\.com\/(?:macros\/s\/|a\/macros\/[A-Za-z0-9.-]+\/s\/)[A-Za-z0-9_-]+\/exec$/.test(endpoint))return Promise.reject(new Error('Submission is not connected yet. Your answers are saved on this device.'));
return new Promise((resolve,reject)=>{
const frame=document.createElement('iframe');frame.name='cheeseSubmit_'+payload.id.replace(/-/g,'');frame.hidden=true;frame.title='Submission receipt';
const form=document.createElement('form');form.method='POST';form.action=endpoint;form.target=frame.name;form.hidden=true;
const field=document.createElement('input');field.type='hidden';field.name='payload';field.value=JSON.stringify(payload);form.append(field);
document.body.append(frame,form);let stopped=false,attempts=0,pollTimer=null,callbackName=null,script=null,requestTimer=null;
function removeRequest(){if(requestTimer)clearTimeout(requestTimer);if(callbackName)delete window[callbackName];script?.remove();script=null;callbackName=null;}
function cleanup(){stopped=true;clearTimeout(pollTimer);removeRequest();frame.remove();form.remove();}
function retry(){removeRequest();if(stopped)return;if(attempts>=12){cleanup();reject(new Error('We could not confirm the save. Try submitting again; your answers are still saved here.'));return;}pollTimer=setTimeout(check,2000);}
function check(){if(stopped)return;attempts++;const suffix=crypto.randomUUID().replace(/-/g,'');callbackName='cheeseStatus_'+suffix;
window[callbackName]=result=>{if(result?.ok===true&&result.receipt===payload.id){cleanup();resolve({id:payload.id,confirmedAt:new Date().toISOString()});}else retry();};
script=document.createElement('script');const url=new URL(endpoint);url.searchParams.set('action','status');url.searchParams.set('id',payload.id);url.searchParams.set('callback',callbackName);url.searchParams.set('_',String(Date.now()));script.src=url.href;script.onerror=retry;requestTimer=setTimeout(retry,8000);document.head.append(script);
}
form.submit();pollTimer=setTimeout(check,1800);
});
};

