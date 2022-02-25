SELECT --'PRODUCT' segment_type,
DECODE (ffv.enabled_flag, 'N', '0', '1') enabled_flag,
ffv.flex_value segment_value,
ffvt.description description,
--ffvt.description description_1,
TO_CHAR(nvl(FFV.START_DATE_ACTIVE,ffv.creation_date),'DD/MM/YYYY') EFFECTIVE_START_DATE,
nvl(TO_CHAR(FFV.END_DATE_ACTIVE,'DD/MM/YYYY'),'-') EFFECTIVE_END_DATE
FROM fnd_flex_value_sets ffvs, fnd_flex_values ffv, fnd_flex_values_tl ffvt
WHERE ffv.flex_value_set_id = ffvs.flex_value_set_id
AND ffv.flex_value_id = ffvt.flex_value_id
AND ffvt.LANGUAGE = 'US'
ANd ffv.SUMMARY_FLAG != 'Y'
AND flex_value_set_name = 'DTAC_PRODUCT'
and FFV.END_DATE_ACTIVE is null
and ffv.last_update_date between sysdate-2 and sysdate
/* AND ffv.last_update_date between nvl( (select max(completedtime)
from fusion_ora_ess.request_history
where definition = 'JobDefinition://oracle/apps/ess/custom/shared/Custom/Financials/Integration/General Ledger/COA/Outbound/04_TNM_PRODUCT/TNM_PRODUCT_04_REP'
and executable_status='SUCCEEDED') ,ffv.last_update_date)
and nvl(sysdate,ffv.last_update_date)*/