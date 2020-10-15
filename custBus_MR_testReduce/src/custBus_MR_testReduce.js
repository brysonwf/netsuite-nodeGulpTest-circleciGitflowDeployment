/**
 *@NApiVersion 2.x
 *@NScriptType MapReduceScript
 *@author brysonfaggart
 */

define(['N/email', 'N/search', 'N/record', 'N/runtime', 'N/log', 'N/https', 'N/file', 'N/render'],
  function (email, search, record, runtime, log, https, file, render) {

    function getInputData () {
      var itemSearchObj = search.create({})
      return itemSearchObj
    }

    function map (context) {
      var currentDateStamp = new Date()

      try {
        log.debug({
          title: 'context',
          details: context
        })

        var contextValue = JSON.parse(context.value)
        log.debug({
          title: 'contextValue',
          details: contextValue
        })
        var objValues = contextValue.values

        log.debug({
          title: 'objValues.internalid.value',
          details: objValues.internalid.value
        })

        //ping QOH endpoint with id of item
        var url = 'https://'
        var headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }

        var response = https.post({
          url: url,
          headers: headers,
          body: '{"OrderType":"X","RscCode":"","Item":[{"StkNum":"' + objValues.itemid + '"}]}'
        })

        log.debug({
          title: 'Client Response Body',
          details: response.body
        })

        var returnObj = JSON.parse(response.body)
        log.debug({
          title: '(returnObj.Items).length',
          details: ' >' + (returnObj.Items).length + '< '
        })


        for (var i = 0; i < returnObj.Items.length; i++) {

          var returnObjectItemVariable = returnObj.Items[i].variable

        }
        log.debug({
          title: 'itemId',
          details: ' >' + itemId + '< '
        })

      } catch (e) {
        log.debug({
          title: 'error',
          details: e
        })
      }
    }

    // The summarize stage is a serial stage, so this function is invoked only one
    // time.

    function summarize (context) {

      // Log details about the script's execution.

      log.audit({
        title: 'Usage units consumed',
        details: context.usage
      })

      log.audit({
        title: 'Concurrency',
        details: context.concurrency
      })

      log.audit({
        title: 'Number of yields',
        details: context.yields
      })
    }

    // Link each entry point to the appropriate function.

    return {
      getInputData: getInputData,
      map: map,
      summarize: summarize
    }
  })