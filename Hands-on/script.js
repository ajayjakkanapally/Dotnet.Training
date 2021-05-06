<html>
	<head>
    <script src="script.js" type="text/javascript"> </script>
  </head>
  <body> 
    <h2 >Feedback for the ART OF LIVING session</h2>
        <table border="0">
            <tr>
                <td><label for="">Enter the Feedback:</label></td>
                <td><textarea name="" id="feedback" rows="6" cols="40"></textarea></td>
            </tr>
            <tr>
                <td><input type="button" name="create" id="create" value="Add Feedback" onclick="addFeedback();" /></td>
            </tr>
            <tr>
                <td><input type="button" name="view" id="view" value="View Feedback" onclick="displayFeedback();" /></td>
            </tr>

        </table>
    <div id="result"></div>
  </body>
</html>
