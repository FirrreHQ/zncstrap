function floodprotection_change() {
	var protection = document.getElementById('floodprotection_checkbox');
	var rate = document.getElementById('floodrate');
	var burst = document.getElementById('floodburst');
	if (protection.checked) {
		rate.removeAttribute('disabled');
		burst.removeAttribute('disabled');
	} else {
		rate.disabled = 'disabled';
		burst.disabled = 'disabled';
	}
}

function serverlist_init($) {
	function serialize() {
		var text = "";
		$("#servers_tbody > tr").each(function() {
			var host = $(".servers_row_host", $(this)).val();
			var port = $(".servers_row_port", $(this)).val();
			var ssl = $(".servers_row_ssl", $(this)).is(":checked");
			var pass = $(".servers_row_pass", $(this)).val();
			if (host.length == 0) return;
			text += host;
			text += " ";
			if (ssl) text += "+";
			text += port;
			text += " ";
			text += pass;
			text += "\n";
		});
		$("#servers_text").val(text);
	}
	function add_row(host, port, ssl, pass) {
		var row = $("<tr/>");
		function delete_row() {
			row.remove();
			serialize();
		}
		row.append(
			$("<td/>").append($("<input/>").attr({"type":"text"})
				.addClass("form-control servers_row_host").val(host)),
			$("<td/>").append($("<input/>").attr({"type":"number"})
				.addClass("form-control servers_row_port").val(port)),
			$("<td/>").append($("<input/>").attr({"type":"checkbox"})
				.addClass("servers_row_ssl").prop("checked", ssl)),
			$("<td/>").append($("<input/>").attr({"type":"text"})
				.addClass("form-control servers_row_pass").val(pass)),
			$("<td/>").append($("<input/>").attr({"type":"button"})
				.addClass("btn btn-danger").val("X").click(delete_row))
		);
		$("input", row).change(serialize);
		$("#servers_tbody").append(row);
	}

	var servers_text = $("#servers_text").val();
	// Parse it
	$.each(servers_text.split("\n"), function(i, line) {
		if (line.length == 0) return;
		line = line.split(" ");
		var host = line[0];
		var port = line[1] || "6667";
		var pass = line[2] || "";
		var ssl;
		if (port.match(/^\+/)) {
			ssl = true;
			port = port.substr(1);
		} else {
			ssl = false;
		}
		add_row(host, port, ssl, pass);
	});
	$("#servers_add").click(function() {
		add_row("", 6697, true, "");
		// Not serializing, because empty host doesn't emit anything anyway
	});

	$("#servers_plain").hide();
	$("#servers_js").show();
 })();
}



/* Broken. Work is in progress... Hang in there cowboy/girl...
function ctcpreplies_init($) {
	function serialize() {
		var text = "";
		$("#ctcpreplies_tbody > tr").each(function() {
			var request = $(".ctcpreplies_row_request", $(this)).val();
			var response = $(".ctcpreplies_row_response", $(this)).val();
			if (request.length == 0) return;
			text += request;
			text += " ";
			text += response;
			text += "\n";
		});
		$("#ctcpreplies_text").val(text);
	}
	function add_row(request, response) {
		var row = $("<tr/>");
		function delete_row() {
			row.remove();
			serialize();
		}
		row.append(
			$("<td/>").append($("<input/>").val(request)
				.addClass("ctcpreplies_row_request")
				.attr({"type":"text","list":"ctcpreplies_list"})),
			$("<td/>").append($("<input/>").val(response)
				.addClass("ctcpreplies_row_response")
				.attr({"type":"text","placeholder":"Empty value means this CTCP request will be ignored"})),
			$("<td/>").append($("<button/>").val("X")
				.attr({"type":"button"}).addClass("btn btn-default").click(delete_row))
		);
		$("input", row).change(serialize);
		$("#ctcpreplies_tbody").append(row);
	}

	(function() {
		var replies_text = $("#ctcpreplies_text").val();
		$.each(replies_text.split("\n"), function(i, line) {
			if (line.length == 0) return;
			var space = line.indexOf(" ");
			var request;
			var response;
			if (space == -1) {
				request = line;
				response = "";
			} else {
				request = line.substr(0, space);
				response = line.substr(space + 1);
			}
			add_row(request, response);
		});
		$("#ctcpreplies_add").click(function() {
			add_row("", "");
		});

		$("#ctcpreplies_plain").hide();
		$("#ctcpreplies_js").show();
	})();
}
*/
