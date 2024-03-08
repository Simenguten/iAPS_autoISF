var freeaps_determineBasal;(()=>{var e={5546:(e,r,a)=>{var t=a(6880);function o(e,r){r||(r=0);var a=Math.pow(10,r);return Math.round(e*a)/a}function n(e,r){return"mmol/L"===r.out_units?o(.0555*e,1):Math.round(e)}var i="",s="",l="",u="",m="",d="",c="",p="",b="",f="",g="",h="",B=1,v=1,_=1,M=1,S=1,x=1,y=100;function I(e,r,a,t,i){if(void 0===a)return rT.error="Error: iob_data undefined. ",rT;var l=a;if(a.length,a.length>1&&(a=l[0]),void 0===a.activity||void 0===a.iob)return rT.error="Error: iob_data missing some property. ",rT;if(!t)return s=", autoISF-SMB disabled:, B30 running","AIMI B30";if(!e)return"oref";var u=n(r.min_bg,r);if(r.use_autoisf&&r.temptargetSet&&r.enableSMB_EvenOn_OddOff||r.use_autoisf&&r.min_bg==r.max_bg&&r.enableSMB_EvenOn_OddOff_always&&!r.temptargetSet){r.temptargetSet?msgType="TempTarget ":msgType="ProfileTarget ","mmol/L"==r.out_units?(evenTarget=o(10*u,0)%2==0,msgUnits=" has ",msgTail=" decimal"):(evenTarget=u%2==0,msgUnits=" is ",msgTail=" number"),evenTarget?msgEven="even":msgEven="odd",r.iob_threshold_percent<100&&r.iob_threshold_percent>0&&(y=r.iob_threshold_percent);var m=y;return evenTarget?0==r.max_iob?(console.error("SMB disabled because of maxIOB=0"),"blocked"):m/100<a.iob/(r.max_iob*i)?(console.error("iobTH: "+o(m,1)+"%, IOB% of maxIOB at "+o(a.iob/(r.max_iob*i)*100,1)+"%"),1!=i?(console.error("Full Loop modified maxIOB "+r.max_iob+" to effectively "+o(r.max_iob*i,2)+" due to profile % and/or exercise mode"),", effective maxIOB "+o(r.max_iob*i,2)):", maxIOB "+r.max_iob,s=", autoISF-SMB disabled:, iobTH exceeded",console.error("SMB disabled by Full Loop logic: IOB "+a.iob+" is more than "+m+"% of maxIOB "+r.max_iob),console.error("Full Loop capped"),"iobTH"):(console.error("SMB enabled - "+msgType+u+msgUnits+msgEven+msgTail),r.temptargetSet&&u<100?(console.error("iobTH: "+o(m,1)+"%, IOB% of maxIOB at "+o(a.iob/(r.max_iob*i)*100,1)+"%"),console.error("Loop at full power"),s=", autoISF-SMB enabled:, even TT","fullLoop"):(console.error("iobTH: "+o(m,1)+"%, IOB% of maxIOB at "+o(a.iob/(r.max_iob*i)*100,1)+"%"),s=", autoISF-SMB enabled:, even Target",console.error("Loop at medium power"),"enforced")):(console.error("SMB disabled - "+msgType+u+msgUnits+msgEven+msgTail),s=", autoISF-SMB disabled:, odd Target",console.error("Loop at minimum power"),"blocked")}return console.error("Full Loop disabled"),"oref"}function F(e,r,a){"bg"==a?(polyX=[50,60,80,90,100,110,150,180,200],polyY=[-.5,-.5,-.3,-.2,0,0,.5,.7,.7]):"delta"==a&&(polyX=[2,7,12,16,20],polyY=[0,0,.4,.7,.7]);var t=polyX.length-1,o=polyX[0],n=polyY[0],i=polyX[t],s=polyY[t],l=1,u=1,m=1,d=o;if(o>e)i=polyX[1],l=(u=n)+((s=polyY[1])-u)/(i-(m=o))*(e-m);else if(i<e)o=polyX[t-1],l=(u=n=polyY[t-1])+(s-u)/(i-(m=o))*(e-m);else for(var c=0;c<=t;c++){if(o=polyX[c],n=polyY[c],o==e){l=n;break}if(o>e){l=u+(n-u)/(o-(m=d))*(e-m);break}u=n,d=o}return l*="delta"==a?r.delta_ISFrange_weight:e>100?r.higher_ISFrange_weight:r.lower_ISFrange_weight}function T(e,r,a,t,n,i,s,l,u){console.error("check ratio "+o(e,2)+" against autoISF min: "+r+" and autoISF max: "+a),e<r?(b=" (lmtd.min)",c="weakest autoISF factor "+o(e,2)+" limited by autoISF_min "+r,console.error(c),e=r):e>a&&(b=" (lmtd.max)",c="strongest autoISF factor "+o(e,2)+" limited by autoISF_max "+a,console.error(c),e=a);var m=1;return s&&i.temptargetSet&&l>u?(m=e*t,n=" (exerciseMode)",console.error("autoISF adjusts sens "+t+", instead of profile.sens "+i.sens),f=n):e>=1?(m=Math.max(e,t),e>=t&&(n="")):(m=Math.min(e,t),e<=t&&(n="")),c="final ISF factor "+o(m,2)+n,console.error(c),m}e.exports=function(e,r,a,w,D,O,C,G,U,A,R,P,E,k,j){var q=0,L="",W="",z="",H="",N="",X=0,Y=0,Z=0,$=0,J=0,K=0;const Q=k.tddYtd,V=k.tdd7d,ee=k.hbt,re=k.isEnabled;function ae(e,r){var a=e.getTime();return new Date(a+36e5*r)}function te(e){var r=w.bolus_increment;.025!=r&&(r=.05);var a=e/r;return a>=1?o(Math.floor(a)*r,5):0}function oe(e){function r(e){return e<10&&(e="0"+e),e}return r(e.getHours())+":"+r(e.getMinutes())+":00"}function ne(e,r){var a=new Date("1/1/1999 "+e),t=new Date("1/1/1999 "+r);return(a.getTime()-t.getTime())/36e5}function ie(e,r){var a=0,t=r,o=(e-r)/36e5,n=0,i=o,s=0;do{if(o>0){var l=oe(t);E[0].rate;for(let e=0;e<E.length;e++){var u=E[e].start;if(l==u){if(e+1<E.length){o>=(s=ne(E[e+1].start,E[e].start))?n=s:o<s&&(n=o)}else if(e+1==E.length){let r=E[0].start;o>=(s=24-ne(E[e].start,r))?n=s:o<s&&(n=o)}a+=te(E[e].rate*n),o-=n,t=ae(t,n)}else if(l>u)if(e+1<E.length){var m=E[e+1].start;l<m&&(o>=(s=ne(m,l))?n=s:o<s&&(n=o),a+=te(E[e].rate*n),o-=n,t=ae(t,n))}else if(e==E.length-1){o>=(s=ne("23:59:59",l))?n=s:o<s&&(n=o),a+=te(E[e].rate*n),o-=n,t=ae(t,n)}}}}while(o>0&&o<i);return a}if(R.length){let e=R.length-1;var se=new Date(R[e].timestamp),le=new Date(R[0].timestamp);if("TempBasalDuration"==R[0]._type&&(le=new Date),(q=(le-se)/36e5)<23.9&&q>21)J=ie(se,(ue=24-q,me=se.getTime(),new Date(me-36e5*ue))),H="24 hours of data is required for an accurate tdd calculation. Currently only "+q.toPrecision(3)+" hours of pump history data are available. Using your pump scheduled basals to fill in the missing hours. Scheduled basals added: "+J.toPrecision(5)+" U. ";else H=""}else console.log("Pumphistory is empty!"),dynISFenabled=!1,enableDynamicCR=!1;var ue,me,de=0,ce=0;o((new Date(we).getTime()-O.lastBolusNormalTime)/6e4,1);for(let e=0;e<R.length;e++)if("Bolus"==R[e]._type&&($+=R[e].amount,0==de&&R[e].amount>=w.iTime_Start_Bolus)){de=t(R[e].amount,w);var pe=new Date(R[e].timestamp);ce=o((new Date-pe)/36e5*60)}for(let e=1;e<R.length;e++)if("TempBasal"==R[e]._type&&R[e].rate>0){X=e,K=R[e].rate;var be=R[e-1]["duration (min)"]/60,fe=be,ge=new Date(R[e-1].timestamp),he=ge;do{if(e--,0==e){he=new Date;break}if("TempBasal"==R[e]._type||"PumpSuspend"==R[e]._type){he=new Date(R[e].timestamp);break}}while(e>0);var Be=(he-ge)/36e5;Be<fe&&(be=Be),Z+=te(K*be),e=X}for(let e=0;e<R.length;e++)if(0,0==R[e]["duration (min)"]||"PumpResume"==R[e]._type){let r=new Date(R[e].timestamp),a=r,t=e;do{if(t>0&&(--t,"TempBasal"==R[t]._type)){a=new Date(R[t].timestamp);break}}while(t>0);(a-r)/36e5>0&&(J+=ie(a,r))}for(let e=R.length-1;e>0;e--)if("TempBasalDuration"==R[e]._type){let r=R[e]["duration (min)"]/60,a=new Date(R[e].timestamp);var ve=a;let t=e;do{if(--t,t>=0&&("TempBasal"==R[t]._type||"PumpSuspend"==R[t]._type)){ve=new Date(R[t].timestamp);break}}while(t>0);if(0==e&&"TempBasalDuration"==R[0]._type&&(ve=new Date,r=R[e]["duration (min)"]/60),(ve-a)/36e5-r>0){J+=ie(ve,ae(a,r))}}var _e={TDD:o(Y=$+Z+J,5),bolus:o($,5),temp_basal:o(Z,5),scheduled_basal:o(J,5)},Me=Y;q>21?(W=". Bolus insulin: "+$.toPrecision(5)+" U",z=". Temporary basal insulin: "+Z.toPrecision(5)+" U",L=". Insulin with scheduled basal rate: "+J.toPrecision(5)+" U",N=H+(" TDD past 24h is: "+Y.toPrecision(5)+" U")+W+z+L,tddReason=", TDD, 24h: "+o(Y,1)+", ytd: "+o(Q,1)+", 7dØ: "+o(V,1),console.error(N)):tddReason=", TDD: Not enough pumpData (< 21h)";var Se={},xe=0,ye=0,Ie=new Date;if(A&&(Ie=new Date(A)),void 0===w||void 0===w.current_basal)return Se.error="Error: could not get current basal rate",Se;var Fe=t(w.current_basal,w),Te=Fe,we=new Date;A&&(we=new Date(A));var De,Oe=new Date(e.date),Ce=o((we-Oe)/60/1e3,1),Ge=e.glucose,Ue=e.noise;De=n(e.delta,w);var Ae=Math.min(e.delta,e.short_avgdelta),Re=Math.min(e.short_avgdelta,e.long_avgdelta),Pe=Math.max(e.delta,e.short_avgdelta,e.long_avgdelta);(Ge<=10||38===Ge||Ue>=3)&&(Se.reason="CGM is calibrating, in ??? state, or noise is high");if(Ce>12||Ce<-5?Se.reason="If current system time "+we+" is correct, then BG data is too old. The last BG data was read "+Ce+"m ago at "+Oe:Ge>60&&e.cgmFlatMinutes>89&&(e.last_cal&&e.last_cal<3?Se.reason="CGM was just calibrated":Se.reason="Error: CGM data was suspiciously flat for the past ~"+o(e.cgmFlatMinutes,1)+"m"),Ge<=10||38===Ge||Ue>=3||Ce>12||Ce<-5||Ge>60&&e.cgmFlatMinutes>89||0===e.short_avgdelta&&0===e.long_avgdelta)return r.rate>Te?(Se.reason+=". Replacing high temp basal of "+r.rate+" with neutral temp of "+Te,Se.deliverAt=Ie,Se.temp="absolute",Se.duration=30,Se.rate=Te,Se):0===r.rate&&r.duration>30?(Se.reason+=". Shortening "+r.duration+"m long zero temp to 30m. ",Se.deliverAt=Ie,Se.temp="absolute",Se.duration=30,Se.rate=0,Se):(Se.reason+=". Temp "+r.rate+" <= current basal "+o(Te,2)+"U/hr; doing nothing. ",Se);var Ee,ke,je,qe,Le=w.max_iob;if(void 0!==w.min_bg&&(ke=w.min_bg),void 0!==w.max_bg&&(je=w.max_bg),void 0!==w.enableSMB_high_bg_target&&(qe=w.enableSMB_high_bg_target),void 0===w.min_bg||void 0===w.max_bg)return Se.error="Error: could not determine target_bg. ",Se;Ee=(w.min_bg+w.max_bg)/2;var We=1,ze="",He=w.exercise_mode||w.high_temptarget_raises_sensitivity,Ne=100,Xe=160;w.half_basal_exercise_target&&(Xe=w.half_basal_exercise_target),re&&(Xe=ee);var Ye=1;if(He&&w.temptargetSet&&Ee>Ne||w.low_temptarget_lowers_sensitivity&&w.temptargetSet&&Ee<Ne){var Ze=Xe-Ne;We=Ze*(Ze+Ee-Ne)<=0?w.autosens_max:Ze/(Ze+Ee-Ne),Ye=We=o(We=Math.min(We,w.autosens_max),2),ze=" from TT modifier",g+=", Ratio TT: "+We,process.stderr.write("Sensitivity ratio set to "+We+" based on temp target of "+Ee+"; ")}else void 0!==D&&D&&w.enable_autosens&&(We=D.ratio,ze=" from Autosens",process.stderr.write("Autosens ratio: "+We+"; "));var $e=Ye;if(We&&(Te=w.current_basal*We,(Te=t(Te,w))!==Fe?process.stderr.write("Adjusting basal from "+Fe+" to "+Te+"; "):process.stderr.write("Basal unchanged: "+Te+"; ")),w.temptargetSet);else if(void 0!==D&&D&&(w.sensitivity_raises_target&&D.ratio<1||w.resistance_lowers_target&&D.ratio>1)){ke=o((ke-60)/D.ratio)+60,je=o((je-60)/D.ratio)+60;var Je=o((Ee-60)/D.ratio)+60;Ee===(Je=Math.max(80,Je))?process.stderr.write("target_bg unchanged: "+Je+"; "):process.stderr.write("target_bg from "+Ee+" to "+Je+"; "),Ee=Je}var Ke=200,Qe=200,Ve=200;if(e.noise>=2){var er=Math.max(1.1,w.noisyCGMTargetMultiplier);Math.min(250,w.maxRaw);Ke=o(Math.min(200,ke*er)),Qe=o(Math.min(200,Ee*er)),Ve=o(Math.min(200,je*er)),process.stderr.write("Raising target_bg for noisy / raw CGM data, from "+Ee+" to "+Qe+"; "),ke=Ke,Ee=Qe,je=Ve}var rr=.5;w.smb_threshold_ratio>.5&&w.smb_threshold_ratio<=1&&(rr=w.smb_threshold_ratio);var ar=ke-(1-rr)*(ke-40);console.log("SMB Threshold set to "+rr+" - no SMB's applied below "+n(ar,w));var tr=o(w.sens,1),or=w.sens;void 0!==D&&D&&((or=o(or=w.sens/We,1))!==tr?process.stderr.write("ISF from "+n(tr,w)+" to "+n(or,w)):process.stderr.write("ISF unchanged: "+n(or,w))),console.error("CR: "+w.carb_ratio),console.error("----------------------------------"),console.error(" start autoISF"),console.error("----------------------------------");var nr=!0,ir=!1,sr=r.rate,lr=w.b30_duration,ur=lr+1;if(console.error("B30 enabled: "+w.use_B30),w.use_B30&&w.use_autoisf){var mr=w.iTime_Start_Bolus,dr=w.iTime_target,cr=w.b30_upperBG,pr=w.b30_upperdelta,br=w.b30_factor,fr=!1;w.temptargetSet&&(fr=!0);var gr=ce;0==gr&&(gr=1);var hr=de;console.error("B30 last bolus above limit of "+mr+"U was "+hr+"U, "+gr+"m ago"),hr>=mr&&gr<=lr&&fr&&Ee==dr&&(ur=gr,ir=!0,console.error("B30 iTime is running : "+ur+"m because manual bolus ("+hr+") >= Minimum Start Bolus size ("+mr+") and EatingSoon TT set at "+n(dr,w))),console.error("B30 Activation: "+ir),console.error("B30 TTset: "+fr+", at "+Ee+", last Bolus of "+hr+"U, "+gr+"m ago. iTime remaining: "+(lr-ur)+"m."),ir&&(e.delta<=pr&&Ge<cr&&(nr=!1),ur<=lr&&(sr=t(Te*br,w),h="AIMI B30, Temp "+sr+"U/hr for "+(lr-ur)+"m, "))}var Br=I(G,w,a,nr,$e),vr=!1;if(G&&"oref"!=Br?("enforced"!=Br&&"fullLoop"!=Br||(vr=!0),console.error("loop_smb function overriden with autoISF checks, enableSMB = "+vr)):(vr=function(e,r,a,t,o,i){return r?!e.allowSMB_with_high_temptarget&&e.temptargetSet&&o>100?(console.error("SMB disabled due to high temptarget of "+o),!1):!0===a.bwFound&&!1===e.A52_risk_enable?(console.error("SMB disabled due to Bolus Wizard activity in the last 6 hours."),!1):!0===e.enableSMB_always?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled due to enableSMB_always"),!0):!0===e.enableSMB_with_COB&&a.mealCOB?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for COB of"+a.mealCOB),!0):!0===e.enableSMB_after_carbs&&a.carbs?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for 6h after carb entry"),!0):!0===e.enableSMB_with_temptarget&&e.temptargetSet&&o<100?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for temptarget of "+n(o,e)),console.error("SMB enabled for temptargets with "+n(o,e)),!0):!0===e.enableSMB_high_bg&&null!==i&&t>=i?(console.error("Checking BG to see if High for SMB enablement."),console.error("Current BG",t," | High BG ",i),a.bwFound?console.error("Warning: High BG SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("High BG detected. Enabling SMB."),!0):(console.error("SMB disabled (no enableSMB preferences active or no condition satisfied)"),!1):(console.error("SMB disabled (!microBolusAllowed)"),!1)}(w,G,O,Ge,Ee,qe),console.error("loop_smb function returns enableSMB = "+vr)),or=function(e,r,a,t,g,h,y,I,w,D,O,C){if(!t.use_autoisf)return console.error("autoISF disabled in Preferences"),i+=", autoISF, disabled",e;if(t.autoISF_off_Sport&&(t.high_temptarget_raises_sensitivity||t.exercise_mode)&&t.temptargetSet&&a>C)return console.error("autoISF disabled due to exercise"),i+=", autoISF, disabled (exercise)",e;const G=g.dura_p,U=g.delta_pl,A=g.delta_pn,R=g.r_squ,P=g.bg_acceleration,E=g.a_0,k=g.a_1,j=g.a_2,q=g.dura_ISF_minutes,L=g.dura_ISF_average;t.autoISF_min;var W=t.autoISF_max,z=!1,H=e,N=a+10-g.glucose,X=g.pp_debug;if("bg_acceleration: "+o(P,3)+", PF-minutes: "+G+", PF-corr: "+o(R,4)+", PF-nextDelta: "+n(A,t)+", PF-lastDelta: "+n(U,t)+", regular Delta: "+n(g.delta,t),console.error(X),t.enable_BG_acceleration){var Y=R;if(0!=j&&Y>=.9){var Z=-k/2/j*5,$=o(E-Z*Z/25*j,1);(Z=o(Z,1))>0&&P<0?(p="predicts a Max of "+n($,t)+", in about "+Math.abs(Z)+"min",console.error("Parabolic fit "+p)):Z>0&&P>0?(p="predicts a Min of "+n($,t)+", in about "+Math.abs(Z)+"min",console.error("Parabolic fit "+p),Z<=30&&$<a&&(v=-t.bgBrake_ISF_weight,p="predicts BG below target soon, applying bgBrake ISF weight of "+-v,console.error("Parabolic fit "+p))):Z<0&&P<0?(p="saw Max of "+n($,t)+", about "+Math.abs(Z)+"min ago",console.error("Parabolic fit "+p)):Z<0&&P>0&&(p="saw Min of "+n($,t)+", about "+Math.abs(Z)+"min ago",console.error("Parabolic fit "+p))}if(Y<.9)p="acce_ISF by-passed, as correlation, "+o(Y,2)+", is too low",console.error("Parabolic fit "+p),d+=", Parabolic Fit, "+p;else{var J=10*(Y-.9),K=1;1==v&&g.glucose<t.target_bg?P>0?(P>1&&(K=.5),v=t.bgBrake_ISF_weight):P<0&&(v=t.bgAccel_ISF_weight):1==v&&(P<0?v=t.bgBrake_ISF_weight:P>0&&(v=t.bgAccel_ISF_weight)),(B=1+P*K*v*J)<0&&(B=.1),console.error(d+"acce_ISF adaptation is "+o(B,2)),1!=B&&(z=!0,d+=", Parabolic Fit, "+p+", acce-ISF Ratio: "+o(B,2))}}else console.error("autoISF BG accelertion adaption disabled in Preferences");i+=s+d+", autoISF",_=1+F(100-N,t,"bg"),console.error("bg_ISF adaptation is "+o(_,2));var Q=1,V=1;if(_<1)return Q=Math.min(_,B),B>1?(c="bg-ISF adaptation lifted to "+o(Q=_*B,2)+", as BG accelerates already",console.error(c),i+=", bg-ISF Ratio: "+o(Q,2)+"(accel.)"):i+=", bg-ISF Ratio: "+o(Q,2)+"(minimal)",V=T(Q,t.autoISF_min,W,w,r,t,O,a,C),H=Math.min(720,o(t.sens/V,1)),i+=", final Ratio: "+o(V,2)+f+b+", final ISF: "+n(t.sens,t)+"→"+n(H,t),H;_>1&&(z=!0,i+=", bg-ISF Ratio: "+o(_,2));var ee=g.delta,re=new Date,ae="";y&&(re=new Date(y)),t.enable_pp_ISF_always||t.pp_ISF_hours>=(re-new Date(h.lastCarbTime))/1e3/3600?deltaType="pp":deltaType="delta",N>0?console.error(deltaType+"_ISF adaptation by-passed as average glucose < "+a+"+10"):g.short_avgdelta<0?console.error(deltaType+"_ISF adaptation by-passed as no rise or too short lived"):"pp"==deltaType?(S=1+Math.max(0,ee*t.pp_ISF_weight),t.enable_pp_ISF_always||(ae=", last Meal "+o((re-h.lastCarbTime)/1e3/3600,1)+" hrs ago is within Range of "+t.pp_ISF_hours+" hrs."),console.error("pp_ISF adaptation is "+o(S,2)+ae),u=", pp-ISF Ratio: "+o(S,2),1!=S&&(z=!0)):(M=F(ee,t,"delta"),N>-20&&(M*=.5),M=1+M,console.error("delta_ISF adaptation is "+o(M,2)),m=", Δ-ISF Ratio: "+o(M,2),1!=M&&(z=!0));var te=t.dura_ISF_weight;h.mealCOB>0&&!t.enableautoisf_with_COB?console.error("dura_ISF by-passed; preferences disabled mealCOB of "+o(h.mealCOB,1)):q<10?console.error("dura_ISF by-passed; BG is only "+q+"m at level "+L):L<=a?console.error("dura_ISF by-passed; avg. glucose "+L+" below target "+n(a,t)):(x+=q/60*(te/a)*(L-a),z=!0,l=", Duration: "+q+", Avg: "+n(L,t)+", dura-ISF Ratio: "+o(x,2),console.error("dura_ISF adaptation is "+o(x,2)+" because ISF "+e+" did not do it for "+o(q,1)+"m"));return z?(Q=Math.max(x,_,M,B,S),console.error("autoISF adaption ratios:"),console.error("  acce "+o(B,2)),console.error("  bg "+o(_,2)),console.error("  dura "+o(x,2)),console.error("  pp "+o(S,2)),console.error("  delta "+o(M,2)),B<1&&(c="strongest autoISF factor "+o(Q,2)+" weakened to "+o(Q*B,2)+" as bg decelerates already",console.error(c),Q*=B),V=T(Q,t.autoISF_min,W,w,r,t,O,a,C),H=o(t.sens/V,1),i+=u+m+l+", final Ratio: "+o(V,2)+f+b+", final ISF: "+n(t.sens,t)+"→"+n(H,t),H):(i+=", not modified",console.error("autoISF does not modify"),H)}(or,ze,Ee,w,e,O,A,0,We,0,He,Ne),console.error("----------------------------------"),console.error(" end autoISF"),console.error("----------------------------------"),void 0===a)return Se.error="Error: iob_data undefined. ",Se;var _r,Mr=a;if(a.length,a.length>1&&(a=Mr[0]),void 0===a.activity||void 0===a.iob)return Se.error="Error: iob_data missing some property. ",Se;var Sr=((_r=void 0!==a.lastTemp?o((new Date(we).getTime()-a.lastTemp.date)/6e4):0)+r.duration)%30;if(console.error("currenttemp:"+r.rate+" lastTempAge:"+_r+"m, tempModulus:"+Sr+"m"),Se.temp="absolute",Se.deliverAt=Ie,G&&r&&a.lastTemp&&r.rate!==a.lastTemp.rate&&_r>10&&r.duration)return Se.reason="Warning: currenttemp rate "+r.rate+" != lastTemp rate "+a.lastTemp.rate+" from pumphistory; canceling temp",C.setTempBasal(0,0,w,Se,r);if(r&&a.lastTemp&&r.duration>0){var xr=_r-a.lastTemp.duration;if(xr>5&&_r>10)return Se.reason="Warning: currenttemp running but lastTemp from pumphistory ended "+xr+"m ago; canceling temp",C.setTempBasal(0,0,w,Se,r)}var yr=o(-a.activity*or*5,2),Ir=o(6*(Ae-yr));Ir<0&&(Ir=o(6*(Re-yr)))<0&&(Ir=o(6*(e.long_avgdelta-yr)));var Fr=Ge,Tr=(Fr=a.iob>0?o(Ge-a.iob*or):o(Ge-a.iob*Math.min(or,w.sens)))+Ir;if(void 0===Tr||isNaN(Tr))return Se.error="Error: could not calculate eventualBG. Sensitivity: "+or+" Deviation: "+Ir,Se;var wr=function(e,r,a){return o(a+(e-r)/24,1)}(Ee,Tr,yr);Se={temp:"absolute",bg:n(Ge,w),tick:De,eventualBG:Tr,insulinReq:0,reservoir:U,deliverAt:Ie,sensitivityRatio:We,TDD:Me,insulin:_e};var Dr=[],Or=[],Cr=[],Gr=[];Dr.push(Ge),Or.push(Ge),Gr.push(Ge),Cr.push(Ge);var Ur=w.enableUAM,Ar=0,Rr=0;Ar=o(Ae-yr,1);var Pr=o(Ae-yr,1);csf=or/w.carb_ratio,console.error("profile.sens:"+n(w.sens,w)+", sens:"+n(or,w)+", CSF:"+o(csf,1));var Er=o(30*csf*5/60,1);Ar>Er&&(console.error("Limiting carb impact from "+Ar+" to "+Er+"mg/dL/5m (30g/h)"),Ar=Er);var kr=3;We&&(kr/=We);var jr=kr;if(O.carbs){kr=Math.max(kr,O.mealCOB/20);var qr=o((new Date(we).getTime()-O.lastCarbTime)/6e4),Lr=(O.carbs-O.mealCOB)/O.carbs;jr=o(jr=kr+1.5*qr/60,1),console.error("Last carbs "+qr+" minutes ago; remainingCATime:"+jr+"hours; "+o(100*Lr)+"% carbs absorbed")}var Wr=Math.max(0,Ar/5*60*jr/2)/csf,zr=90,Hr=1;w.remainingCarbsCap&&(zr=Math.min(90,w.remainingCarbsCap)),w.remainingCarbsFraction&&(Hr=Math.min(1,w.remainingCarbsFraction));var Nr=1-Hr,Xr=Math.max(0,O.mealCOB-Wr-O.carbs*Nr),Yr=(Xr=Math.min(zr,Xr))*csf*5/60/(jr/2),Zr=o(O.slopeFromMaxDeviation,2),$r=o(O.slopeFromMinDeviation,2),Jr=Math.min(Zr,-$r/3),Kr=0;0===Ar?Rr=0:!0===w.floating_carbs?(Rr=Math.min(60*jr/5/2,Math.max(0,O.carbs*csf/Ar)),Kr=Math.min(60*jr/5/2,Math.max(0,O.mealCOB*csf/Ar)),O.carbs>0&&(i+=", Floating Carbs:, CID: "+o(Rr,1)+", MealCarbs: "+o(O.carbs,1)+", Not Floating:, CID: "+o(Kr,1)+", MealCOB: "+o(O.mealCOB,1),console.error("Floating Carbs CID: "+o(Rr,1)+" / MealCarbs: "+o(O.carbs,1)+" vs. Not Floating:"+o(Kr,1)+" / MealCOB:"+o(O.mealCOB,1)))):Rr=Math.min(60*jr/5/2,Math.max(0,O.mealCOB*csf/Ar)),console.error("Carb Impact:"+Ar+"mg/dL per 5m; CI Duration:"+o(5*Rr/60*2,1)+"hours; remaining CI ("+o(jr/2,2)+"h peak):",o(Yr,1)+"mg/dL per 5m");var Qr,Vr,ea,ra,aa,ta=999,oa=999,na=999,ia=Ge,sa=999,la=999,ua=999,ma=999,da=Tr,ca=Ge,pa=Ge,ba=0,fa=[],ga=[];try{Mr.forEach((function(e){var r=o(-e.activity*or*5,2),a=o(-e.iobWithZeroTemp.activity*or*5,2),t=Ar*(1-Math.min(1,Or.length/12));da=Or[Or.length-1]+r+t;var n=Gr[Gr.length-1]+a,i=Math.max(0,Math.max(0,Ar)*(1-Dr.length/Math.max(2*Rr,1))),s=Math.min(Dr.length,12*jr-Dr.length),l=Math.max(0,s/(jr/2*12)*Yr);i+l,fa.push(o(l,0)),ga.push(o(i,0)),COBpredBG=Dr[Dr.length-1]+r+Math.min(0,t)+i+l;var u=Math.max(0,Pr+Cr.length*Jr),m=Math.max(0,Pr*(1-Cr.length/Math.max(36,1))),d=Math.min(u,m);d>0&&(ba=o(5*(Cr.length+1)/60,1)),UAMpredBG=Cr[Cr.length-1]+r+Math.min(0,t)+d,Or.length<48&&Or.push(da),Dr.length<48&&Dr.push(COBpredBG),Cr.length<48&&Cr.push(UAMpredBG),Gr.length<48&&Gr.push(n),COBpredBG<sa&&(sa=o(COBpredBG)),UAMpredBG<la&&(la=o(UAMpredBG)),da<ua&&(ua=o(da)),n<ma&&(ma=o(n));Or.length>18&&da<ta&&(ta=o(da)),da>ca&&(ca=da),(Rr||Yr>0)&&Dr.length>18&&COBpredBG<oa&&(oa=o(COBpredBG)),(Rr||Yr>0)&&COBpredBG>ca&&(pa=COBpredBG),Ur&&Cr.length>12&&UAMpredBG<na&&(na=o(UAMpredBG)),Ur&&UAMpredBG>ca&&UAMpredBG}))}catch(e){console.error("Problem with iobArray.  Optional feature Advanced Meal Assist disabled")}Se.predBGs={},Or.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))}));for(var ha=Or.length-1;ha>12&&Or[ha-1]===Or[ha];ha--)Or.pop();for(Se.predBGs.IOB=Or,ea=o(Or[Or.length-1]),Gr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),ha=Gr.length-1;ha>6&&!(Gr[ha-1]>=Gr[ha]||Gr[ha]<=Ee);ha--)Gr.pop();if(Se.predBGs.ZT=Gr,o(Gr[Gr.length-1]),O.mealCOB>0&&(Ar>0||Yr>0)){for(Dr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),ha=Dr.length-1;ha>12&&Dr[ha-1]===Dr[ha];ha--)Dr.pop();Se.predBGs.COB=Dr,ra=o(Dr[Dr.length-1]),Tr=Math.max(Tr,o(Dr[Dr.length-1]))}if(Ar>0||Yr>0){if(Ur){for(Cr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),ha=Cr.length-1;ha>12&&Cr[ha-1]===Cr[ha];ha--)Cr.pop();Se.predBGs.UAM=Cr,aa=o(Cr[Cr.length-1]),Cr[Cr.length-1]&&(Tr=Math.max(Tr,o(Cr[Cr.length-1])))}Se.eventualBG=Tr}console.error("UAM Impact:"+Pr+"mg/dL per 5m; UAM Duration:"+ba+"hours"),ta=Math.max(39,ta),oa=Math.max(39,oa),na=Math.max(39,na),Qr=o(ta);var Ba=O.mealCOB/O.carbs;Vr=o(na<999&&oa<999?(1-Ba)*UAMpredBG+Ba*COBpredBG:oa<999?(da+COBpredBG)/2:na<999?(da+UAMpredBG)/2:da),ma>Vr&&(Vr=ma),ia=o(ia=Rr||Yr>0?Ur?Ba*sa+(1-Ba)*la:sa:Ur?la:ua);var va=na;if(ma<ar)va=(na+ma)/2;else if(ma<Ee){var _a=(ma-ar)/(Ee-ar);va=(na+(na*_a+ma*(1-_a)))/2}else ma>na&&(va=(na+ma)/2);if(va=o(va),O.carbs)if(!Ur&&oa<999)Qr=o(Math.max(ta,oa));else if(oa<999){var Ma=Ba*oa+(1-Ba)*va;Qr=o(Math.max(ta,oa,Ma))}else Qr=Ur?va:ia;else Ur&&(Qr=o(Math.max(ta,va)));Qr=Math.min(Qr,Vr),process.stderr.write("minPredBG: "+n(Qr,w)+" minIOBPredBG: "+n(ta,w)+" minZTGuardBG: "+n(ma,w)),oa<999&&process.stderr.write(" minCOBPredBG: "+n(oa,w)),na<999&&process.stderr.write(" minUAMPredBG: "+n(na,w)),console.error(" avgPredBG:"+n(Vr,w)+" COB/Carbs:"+O.mealCOB+"/"+O.carbs),pa>Ge&&(Qr=Math.min(Qr,pa)),Se.COB=O.mealCOB,Se.IOB=a.iob,Se.BGI=n(yr,w),Se.deviation=n(Ir,w),Se.dura_ISFratio=o(x,2),Se.bg_ISFratio=o(_,2),Se.delta_ISFratio=o(M,2),Se.pp_ISFratio=o(S,2),Se.acce_ISFratio=o(B,2),Se.auto_ISFratio=o(w.sens/or,2),Se.ISF=n(or,w),Se.CR=o(w.carb_ratio,2),Se.TDD=o(Me,1),Se.TDDytd=o(Q,1),Se.TDD7d=o(V,1),Se.target_bg=n(Ee,w),Se.minDelta=Ae,Se.expectedDelta=wr,Se.minGuardBG=ia,Se.minPredBG=Qr;var Sa=function(e,r,a,t){if(!e.use_autoisf)return console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),.5;var n=e.smb_delivery_ratio_bg_range;n<10&&(n/=.0555);var i=e.smb_delivery_ratio,s=Math.min(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max),l=Math.max(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max),u=a+n,m=i;return n>0&&(m=s+(l-s)*(r-a)/n,m=Math.max(s,Math.min(l,m))),"fullLoop"==t?(console.error("SMB delivery ratio set to "+o(Math.max(i,m),2)+" as max of fixed and interpolated values"),Math.max(i,m)):0==n?(console.error("SMB delivery ratio set to fixed value "+o(i,2)),i):r<=a?(console.error("SMB delivery ratio limited by minimum value "+o(s,2)),s):r>=u?(console.error("SMB delivery ratio limited by maximum value "+o(l,2)),l):(console.error("SMB delivery ratio set to interpolated value "+o(m,2)),m)}(w,Ge,Ee,Br);Se.SMBratio=o(Sa,2);var xa="SMB Del.Ratio:, "+o(Sa,2);let ya="";""!==j&&"Nothing changed"!==j&&(ya="Middleware:, "+j+", "),Se.reason=ya+h+xa+g+i+", Standard, COB: "+Se.COB+", Dev: "+Se.deviation+", BGI: "+Se.BGI+", ISF: "+Se.ISF+", CR: "+Se.CR+", Target: "+Se.target_bg+", minPredBG "+n(Qr,w)+", minGuardBG "+n(ia,w)+", IOBpredBG "+n(ea,w),ra>0&&(Se.reason+=", COBpredBG "+n(ra,w)),aa>0&&(Se.reason+=", UAMpredBG "+n(aa,w)),Se.reason+=tddReason,Se.reason+="; ";var Ia=Fr;Ia<40&&(Ia=Math.min(ia,Ia));var Fa=ar-Ia,Ta=240,wa=240;if(O.mealCOB>0&&(Ar>0||Yr>0)){for(ha=0;ha<Dr.length;ha++)if(Dr[ha]<ke){Ta=5*ha;break}for(ha=0;ha<Dr.length;ha++)if(Dr[ha]<ar){wa=5*ha;break}}else{for(ha=0;ha<Or.length;ha++)if(Or[ha]<ke){Ta=5*ha;break}for(ha=0;ha<Or.length;ha++)if(Or[ha]<ar){wa=5*ha;break}}vr&&ia<ar&&(console.error("minGuardBG "+n(ia,w)+" projected below "+n(ar,w)+" - disabling SMB"),ye=1,xe=o((Tr-Ee)/or,2),vr=!1);var Da=.2;"fullLoop"==Br&&(Da=.3),Pe>Da*Ge&&(console.error("maxDelta "+n(Pe,w)+" > "+100*Da+"% of BG "+n(Ge,w)+" - disabling SMB"),Se.reason+="maxDelta "+n(Pe,w)+" > "+100*Da+"% of BG "+n(Ge,w)+" - SMB disabled!, ",vr=!1),console.error("BG projected to remain above "+n(ke,w)+" for "+Ta+"minutes"),(wa<240||Ta<60)&&console.error("BG projected to remain above "+n(ar,w)+" for "+wa+"minutes");var Oa=wa,Ca=w.current_basal*or*Oa/60,Ga=Math.max(0,O.mealCOB-.25*O.carbs),Ua=(Fa-Ca)/csf-Ga;if(Ca=o(Ca),Ua=o(Ua),console.error("naive_eventualBG: "+n(Fr,w)+", bgUndershoot: "+n(Fa,w)+", zeroTempDuration: "+Oa+", zeroTempEffect: "+Ca+", carbsReq: "+Ua),"Could not parse clock data"==O.reason?console.error("carbsReq unknown: Could not parse clock data"):Ua>=w.carbsReqThreshold&&wa<=45&&(Se.carbsReq=Ua,Se.reason+=Ua+" add'l carbs req w/in "+wa+"m; "),ir&&ur<=lr)return Se.reason+="setting AIMI B30 Temp "+t(sr,w)+"U/hr for "+(lr-ur)+"m ",Se.temp="absolute",Se.deliverAt=Ie,Se.duration=Math.min(30,lr-ur),console.error("Forcing AIMI temp "+sr+"U/hr"),C.setTempBasal(sr,30,w,Se,r);var Aa=0;if(Ge<ar&&a.iob<20*-w.current_basal/60&&Ae>0&&Ae>wr)Se.reason+="IOB "+a.iob+" < "+o(20*-w.current_basal/60,2),Se.reason+=" and minDelta "+n(Ae,w)+" > expectedDelta "+n(wr,w)+"; ";else if(Ge<ar||ia<ar)return Se.reason+="minGuardBG "+n(ia,w)+"<"+n(ar,w),ia<ar&&(ye=2),xe=o((Tr-Ee)/or,2),Aa=o(60*((Fa=Ee-ia)/or)/w.current_basal),Aa=30*o(Aa/30),Aa=Math.min(120,Math.max(30,Aa)),C.setTempBasal(0,Aa,w,Se,r);if(w.skip_neutral_temps&&Se.deliverAt.getMinutes()>=55){if(!vr)return Se.reason+="; Canceling temp at "+(60-Se.deliverAt.getMinutes())+"min before turn of the hour to avoid beeping of MDT. SMB disabled anyways.",C.setTempBasal(0,0,w,Se,r);console.error(60-Se.deliverAt.getMinutes()+"min before turn of the hour, but SMB's are enabled - no skipping neutral temps")}var Ra=0,Pa=Te;if(Tr<ke){if(Se.reason+="Eventual BG "+n(Tr,w)+" < "+n(ke,w),Ae>wr&&Ae>0&&!Ua)return Fr<40?(Se.reason+=", naive_eventualBG < 40. ",C.setTempBasal(0,30,w,Se,r)):(e.delta>Ae?Se.reason+=", but Delta "+n(De,w)+" > expectedDelta "+n(wr,w):Se.reason+=", but Min. Delta "+Ae.toFixed(2)+" > Exp. Delta "+n(wr,w),r.duration>15&&t(Te,w)===t(r.rate,w)?(Se.reason+=", temp "+r.rate+" ~ req "+Te+"U/hr. ",Se):(Se.reason+="; setting current basal of "+Te+" as temp. ",C.setTempBasal(Te,30,w,Se,r)));Ra=o(Ra=2*Math.min(0,(Tr-Ee)/or),2);var Ea=Math.min(0,(Fr-Ee)/or);if(Ea=o(Ea,2),Ae<0&&Ae>wr)Ra=o(Ra*(Ae/wr),2);if(Pa=t(Pa=Te+2*Ra,w),r.duration*(r.rate-Te)/60<Math.min(Ra,Ea)-.3*Te)return Se.reason+=", "+r.duration+"m@"+r.rate.toFixed(2)+" is a lot less than needed. ",C.setTempBasal(Pa,30,w,Se,r);if(void 0!==r.rate&&r.duration>5&&Pa>=.8*r.rate)return Se.reason+=", temp "+r.rate+" ~< req "+Pa+"U/hr. ",Se;if(Pa<=0){if((Aa=o(60*((Fa=Ee-Fr)/or)/w.current_basal))<0?Aa=0:(Aa=30*o(Aa/30),Aa=Math.min(120,Math.max(0,Aa))),Aa>0)return Se.reason+=", setting "+Aa+"m zero temp. ",C.setTempBasal(Pa,Aa,w,Se,r)}else Se.reason+=", setting "+Pa+"U/hr. ";return C.setTempBasal(Pa,30,w,Se,r)}if(Ae<wr&&(Se.minDelta=Ae,Se.expectedDelta=wr,(wr-Ae>=2||wr+-1*Ae>=2)&&(ye=Ae>=0&&wr>0?3:Ae<0&&wr<=0||Ae<0&&wr>=0?4:5),xe=o((Tr-Ee)/or,2),!G||!vr))return e.delta<Ae?Se.reason+="Eventual BG "+n(Tr,w)+" > "+n(ke,w)+" but Delta "+n(De,w)+" < Exp. Delta "+n(wr,w):Se.reason+="Eventual BG "+n(Tr,w)+" > "+n(ke,w)+" but Min. Delta "+Ae.toFixed(2)+" < Exp. Delta "+n(wr,w),r.duration>15&&t(Te,w)===t(r.rate,w)?(Se.reason+=", temp "+r.rate+" ~ req "+Te+"U/hr. ",Se):(Se.reason+="; setting current basal of "+Te+" as temp. ",C.setTempBasal(Te,30,w,Se,r));if(Math.min(Tr,Qr)<je&&(Qr<ke&&Tr>ke&&(ye=6,xe=o((Tr-Ee)/or,2)),!G||!vr))return Se.reason+=n(Tr,w)+"-"+n(Qr,w)+" in range: no temp required",r.duration>15&&t(Te,w)===t(r.rate,w)?(Se.reason+=", temp "+r.rate+" ~ req "+Te+"U/hr. ",Se):(Se.reason+="; setting current basal of "+Te+" as temp. ",C.setTempBasal(Te,30,w,Se,r));if(Tr>=je&&(Se.reason+="Eventual BG "+n(Tr,w)+" >= "+n(je,w)+", "),a.iob>Le)return Se.reason+="IOB "+o(a.iob,2)+" > maxIOB "+Le,r.duration>15&&t(Te,w)===t(r.rate,w)?(Se.reason+=", temp "+r.rate+" ~ req "+Te+"U/hr. ",Se):(Se.reason+="; setting current basal of "+Te+" as temp. ",C.setTempBasal(Te,30,w,Se,r));Ra=o((Math.min(Qr,Tr)-Ee)/or,2),xe=o((Tr-Ee)/or,2),Ra>Le-a.iob?(Se.reason+="maxIOB "+Le+", ",console.error("InsReq "+o(Ra,2)+" capped at "+o(Le-a.iob,2)+" to not exceed maxIOB"),Ra=Le-a.iob):console.error("SMB not limited by maxIOB (insulinReq: "+Ra+" U)"),xe>Le-a.iob?console.error("Ev. Bolus limited by maxIOB to "+o(Le-a.iob,2)+" (insulinForManualBolus: "+xe+" U)"):console.error("Ev. Bolus would not be limited by maxIOB (insulinForManualBolus: "+xe+" U)."),Pa=t(Pa=Te+2*Ra,w),Ra=o(Ra,3),Se.insulinReq=Ra,Se.insulinForManualBolus=o(xe,2),Se.manualBolusErrorString=ye,Se.minDelta=Ae,Se.expectedDelta=wr,Se.minGuardBG=ia,Se.minPredBG=Qr,Se.threshold=n(ar,w),Se.reason="Ins.Req: "+o(Ra,2)+", "+Se.reason;var ka=o((new Date(we).getTime()-a.lastBolusTime)/6e4,1);if(G&&vr&&Ge>ar){var ja=o(O.mealCOB/w.carb_ratio,3);if(w.use_autoisf)qa=w.smb_max_range_extension;else{console.error("autoISF disabled, SMB range extension disabled");var qa=1}qa>1&&console.error("SMB max range extended from default by factor "+qa);var La=0;void 0===w.maxSMBBasalMinutes?(La=o(qa*w.current_basal*30/60,1),console.error("profile.maxSMBBasalMinutes undefined: defaulting to 30m")):a.iob>ja&&a.iob>0?(console.error("IOB "+a.iob+" > COB "+O.mealCOB+"; mealInsulinReq = "+ja),w.maxUAMSMBBasalMinutes?(console.error("profile.maxUAMSMBBasalMinutes:",w.maxUAMSMBBasalMinutes,"profile.current_basal:",w.current_basal),La=o(qa*w.current_basal*w.maxUAMSMBBasalMinutes/60,1)):(console.error("profile.maxUAMSMBBasalMinutes undefined: defaulting to 30m"),La=o(30*w.current_basal/60,1))):(console.error("profile.maxSMBBasalMinutes:",w.maxSMBBasalMinutes,"profile.current_basal:",w.current_basal),La=o(qa*w.current_basal*w.maxSMBBasalMinutes/60,1));var Wa=w.bolus_increment,za=1/Wa;w.use_autoisf||(console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),Sa=.5),Sa>.5&&console.error("SMB Delivery Ratio increased from default 0.5 to "+o(Sa,2));var Ha=Math.min(Ra*Sa,La),Na="",Xa=y/100*130/100*w.max_iob*$e;Ha>Xa-a.iob&&("fullLoop"==Br||"enforced"==Br)&&(Ha=Xa-a.iob,Na=", capped by autoISF iobTH",console.error("autoISF capped SMB at "+o(Ha,2)+" to not exceed 130% of effective iobTH "+o(Xa/130*100,2)+"U")),Ha=Math.floor(Ha*za)/za,Aa=o(60*((Ee-(Fr+ta)/2)/or)/w.current_basal),Ra>0&&Ha<Wa&&(Aa=0);var Ya=0;Aa<=0?Aa=0:Aa>=30?(Aa=30*o(Aa/30),Aa=Math.min(60,Math.max(0,Aa))):(Ya=o(Te*Aa/30,2),Aa=30),Se.reason+=" insulinReq "+Ra,Ha>=La&&(Se.reason+="; maxBolus "+La),Aa>0&&(Se.reason+="; setting "+Aa+"m low temp of "+Ya+"U/h"),Se.reason+=". ";var Za=3;w.SMBInterval&&(Za=Math.min(10,Math.max(1,w.SMBInterval)));var $a=o(Za-ka,0),Ja=o(60*(Za-ka),0)%60;if(console.error("naive_eventualBG "+n(Fr,w)+", "+Aa+"m "+Ya+"U/h temp needed; last bolus "+ka+"m ago; maxBolus: "+La),ka>Za?Ha>0&&(Se.units=Ha,Se.reason+="Microbolusing "+Ha+"U"+Na+". "):Se.reason+="Waiting "+$a+"m "+Ja+"s to microbolus again. ",Aa>0)return Se.rate=Ya,Se.duration=Aa,Se}var Ka=C.getMaxSafeBasal(w);return Pa>Ka&&(Se.reason+="adj. req. rate: "+o(Pa,2)+" to maxSafeBasal: "+o(Ka,2)+", ",Pa=t(Ka,w)),r.duration*(r.rate-Te)/60>=2*Ra?(Se.reason+=r.duration+"m@"+r.rate.toFixed(2)+" > 2 * insulinReq. Setting temp basal of "+Pa+"U/hr. ",C.setTempBasal(Pa,30,w,Se,r)):void 0===r.duration||0===r.duration?(Se.reason+="no temp, setting "+Pa+"U/hr. ",C.setTempBasal(Pa,30,w,Se,r)):r.duration>5&&t(Pa,w)<=t(r.rate,w)?(Se.reason+="temp "+r.rate+" >~ req "+Pa+"U/hr. ",Se):(Se.reason+="temp "+r.rate+"<"+Pa+"U/hr. ",C.setTempBasal(Pa,30,w,Se,r))}},6880:(e,r,a)=>{var t=a(6654);e.exports=function(e,r){var a=20;void 0!==r&&"string"==typeof r.model&&(t(r.model,"54")||t(r.model,"23"))&&(a=40);return e<1?Math.round(e*a)/a:e<10?Math.round(20*e)/20:Math.round(10*e)/10}},2705:(e,r,a)=>{var t=a(5639).Symbol;e.exports=t},9932:e=>{e.exports=function(e,r){for(var a=-1,t=null==e?0:e.length,o=Array(t);++a<t;)o[a]=r(e[a],a,e);return o}},9750:e=>{e.exports=function(e,r,a){return e==e&&(void 0!==a&&(e=e<=a?e:a),void 0!==r&&(e=e>=r?e:r)),e}},4239:(e,r,a)=>{var t=a(2705),o=a(9607),n=a(2333),i=t?t.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):n(e)}},531:(e,r,a)=>{var t=a(2705),o=a(9932),n=a(1469),i=a(3448),s=t?t.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(n(r))return o(r,e)+"";if(i(r))return l?l.call(r):"";var a=r+"";return"0"==a&&1/r==-Infinity?"-0":a}},7561:(e,r,a)=>{var t=a(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,t(e)+1).replace(o,""):e}},1957:(e,r,a)=>{var t="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g;e.exports=t},9607:(e,r,a)=>{var t=a(2705),o=Object.prototype,n=o.hasOwnProperty,i=o.toString,s=t?t.toStringTag:void 0;e.exports=function(e){var r=n.call(e,s),a=e[s];try{e[s]=void 0;var t=!0}catch(e){}var o=i.call(e);return t&&(r?e[s]=a:delete e[s]),o}},2333:e=>{var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},5639:(e,r,a)=>{var t=a(1957),o="object"==typeof self&&self&&self.Object===Object&&self,n=t||o||Function("return this")();e.exports=n},7990:e=>{var r=/\s/;e.exports=function(e){for(var a=e.length;a--&&r.test(e.charAt(a)););return a}},6654:(e,r,a)=>{var t=a(9750),o=a(531),n=a(554),i=a(9833);e.exports=function(e,r,a){e=i(e),r=o(r);var s=e.length,l=a=void 0===a?s:t(n(a),0,s);return(a-=r.length)>=0&&e.slice(a,l)==r}},1469:e=>{var r=Array.isArray;e.exports=r},3218:e=>{e.exports=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,r,a)=>{var t=a(4239),o=a(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==t(e)}},8601:(e,r,a)=>{var t=a(4841),o=1/0;e.exports=function(e){return e?(e=t(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,r,a)=>{var t=a(8601);e.exports=function(e){var r=t(e),a=r%1;return r==r?a?r-a:r:0}},4841:(e,r,a)=>{var t=a(7561),o=a(3218),n=a(3448),i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(o(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=o(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=t(e);var a=s.test(e);return a||l.test(e)?u(e.slice(2),a?2:8):i.test(e)?NaN:+e}},9833:(e,r,a)=>{var t=a(531);e.exports=function(e){return null==e?"":t(e)}}},r={};function a(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var t=a(5546);freeaps_determineBasal=t})();