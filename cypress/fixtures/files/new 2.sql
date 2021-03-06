[11:41 AM] Shanza Irfan Qureshi
select
--'ACCOUNT' SEGMENT_TYPE,
decode(ffv.enabled_flag,'N','0','1') ENABLED_FLAG,
FFV.FLEX_VALUE SEGMENT_VALUE,
FFVT.DESCRIPTION DESCRIPTION,
-- FFVT.DESCRIPTION DESCRIPTION_1,
ffv.SUMMARY_FLAG SUMMARY_FLAG,
DECODE(substr(replace(compiled_value_attributes,chr(10),''),4,1),'E','Expense','A','Assets','L','Liability','O','Owner','R','Revenue') Account_type,
--nvl(ffv.attribute2,' ') Exp_type,
TO_CHAR(nvl(FFV.START_DATE_ACTIVE,ffv.creation_date),'DD/MM/YYYY') EFFECTIVE_START_DATE,
nvl(TO_CHAR(FFV.END_DATE_ACTIVE,'DD-MM-YYYY HH24:MI:SS'),'-') EFFECTIVE_END_DATE,
nvl(ffv.ATTRIBUTE7,'N') IS_COUPA_RELEVANT
from fnd_flex_value_sets ffvs,
fnd_flex_values ffv,
FND_FLEX_VALUES_TL FFVT
where ffv.flex_value_set_id = ffvs.flex_value_set_id
and FFV.FLEX_VALUE_ID = FFVT.FLEX_VALUE_ID
AND FFVT.LANGUAGE='US'
and flex_value_set_name = 'DTAC_ACCOUNT'
--and ffv.SUMMARY_FLAG != 'Y'
and FFV.END_DATE_ACTIVE is null
and ffv.last_update_date between sysdate-5 and sysdate
/*AND ffv.last_update_date between nvl( (select max(completedtime)
from fusion_ora_ess.request_history
where definition = 'JobDefinition://oracle/apps/ess/custom/shared/Custom/Financials/Integration/General Ledger/COA/Outbound/03_TNM_ACCOUNT/TNM_ACCOUNT_03_REP'
and executable_status='SUCCEEDED') ,ffv.last_update_date)
and nvl(sysdate,ffv.last_update_date)
*/
TAX CODE
select
ZR.COUNTRY_CODE,
'Standard' WITH_HOLDING_TAX_TYPE,
ZRB.TAX_RATE_CODE,
ZRB.PERCENTAGE_RATE TAX_RATE,
ZRB.TAX TAX_TYPE,
nvl(ZRB.DESCRIPTION,'-') DESCRIPTION,
case when ZRB.EFFECTIVE_TO is null then 'Y' else 'N' end ACTIVE,
nvl(TO_CHAR(ZRB.EFFECTIVE_FROM,'DD/MM/YYYY'),'-') EFFECTIVE_START_DATE,
nvl(TO_CHAR(ZRB.EFFECTIVE_TO,'DD/MM/YYYY'),'-') EFFECTIVE_END_DATE,
ZR.TAX_REGIME_CODE
from ZX_RATES_B ZRB,
ZX_REGIMES_B ZR
where ZRB.TAX_REGIME_CODE = ZR.TAX_REGIME_CODE

[11:42 AM] Shanza Irfan Qureshi
SELECT --'COST_CENTER' segment_type,
DECODE (ffv.enabled_flag, 'N', '0', '1') enabled_flag,
ffv.flex_value segment_value,
ffvt.description description,
-- ffvt.description description_1,
ffv.SUMMARY_FLAG SUMMARY_FLAG,
TO_CHAR(nvl(FFV.START_DATE_ACTIVE,ffv.creation_date),'DD/MM/YYYY') EFFECTIVE_START_DATE,
nvl(TO_CHAR(FFV.END_DATE_ACTIVE,'DD/MM/YYYY'),'-') EFFECTIVE_END_DATE
FROM fnd_flex_value_sets ffvs,
fnd_flex_values ffv,
fnd_flex_values_tl ffvt
WHERE ffv.flex_value_set_id = ffvs.flex_value_set_id
AND ffv.flex_value_id = ffvt.flex_value_id
AND ffvt.LANGUAGE = 'US'
-- ANd ffv.SUMMARY_FLAG != 'Y'
AND flex_value_set_name = 'DTAC_COST_CENTER'
and FFV.END_DATE_ACTIVE is null
and ffv.last_update_date between sysdate-2 and sysdate
/*
AND ffv.last_update_date between nvl( (select max(completedtime)
from fusion_ora_ess.request_history
where definition = 'JobDefinition://oracle/apps/ess/custom/shared/Custom/Financials/Integration/General Ledger/COA/Outbound/02_TNM_DEPARTMENT/TNM_DEPARTMENT_02'
and executable_status='SUCCEEDED') ,ffv.last_update_date)
and nvl(sysdate,ffv.last_update_date)
*/

